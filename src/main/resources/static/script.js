// =====================
//  Speech Functions
// =====================

// make them global so onclick in the generated HTML can call them
window.stopSpeaking = function () {
    speechSynthesis.cancel();
};

window.speakNow = function (content) {
    const utterance = new SpeechSynthesisUtterance(content);

    // ensure voices are loaded before picking one
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        utterance.voice = voices[1]; // pick the first available voice
    }
    utterance.volume = 1; // 0.0 – 1.0
    speechSynthesis.cancel();       // stop anything already speaking
    speechSynthesis.speak(utterance);
};

// preload voices (important for Chrome)
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

// =====================
//  Main jQuery logic
// =====================
$(document).ready(function () {

    const loadingGifImage = document.getElementById('loadingGif');

    // safe to call now because stopSpeaking is defined above
    stopSpeaking();

    // adjust music volume if backgroundMusic exists
    if (typeof backgroundMusic !== 'undefined') {
        backgroundMusic.volume = 0.1;
    }

    $('#searchBtn').click(function () {
        const mute = document.getElementById('mute');
        loadingGifImage.classList.remove('d-none');
        stopSpeaking();

        const query = $('#query').val();

        $.ajax({
            url: '/api/gemini', // your Spring Boot endpoint
            method: 'GET',
            data: { query: query },
            success: function (response) {
                responseGiven = response;
                displayResponse(response, query);
                loadingGifImage.classList.add('d-none');
            },
            error: function (error) {
                $('#results').html('<p>Error: ' + error.responseText + '</p>');
            }
        });
    });

    function displayResponse(response, query) {
        const resultsDiv = $('#results');
        resultsDiv.empty();
        response = JSON.parse(response);

        if (response.candidates && response.candidates.length > 0) {
            const candidate = response.candidates[0];
            const content = candidate.content.parts.map(part => part.text).join(" ");
            $('#query').val('');

            // Convert Markdown to HTML
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(content);

            // Extract plain text for speech (escape single quotes for HTML attribute)
            const plainText = $('<div>').html(htmlContent).text().replace(/'/g, "\\'");

            // Display the text inside a Bootstrap card
            resultsDiv.html(`
                <div class="text-white text-end mb-2 fadeInUp" style="width: 750px">${query} : You</div>
                <div class="card text-white bg-dark mb-3 fadeInUp border-0" style="width: 750px;opacity: 0.95">
                    <div class="card-body">
                        <div class="mb-2">
                            <img src="logoUpdated.png" style="width: 50px" class="rounded pe-2">ESOFT AI Says :
                        </div>
                        <p class="card-text" id="txtAnswer">${htmlContent}</p>

                        <!-- Stop speaking button -->
                        <div class="btn btn-danger btn-sm" id="mute" onclick="stopSpeaking()">
                            <i class='fa-solid fa-volume-xmark'></i>
                        </div>

                        <!-- Speak again button -->
                        <button class="btn btn-success btn-sm"
                                onclick="speakNow('${plainText}')">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </div>
                </div>
            `);
            speakNow(plainText);
        } else {
            resultsDiv.html('<p>No content available</p>');
        }
    }
});
