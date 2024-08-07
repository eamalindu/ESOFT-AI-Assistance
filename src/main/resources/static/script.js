$(document).ready(function() {
    loadingGifImage = document.getElementById('loadingGif');
    stopSpeaking();
    backgroundMusic.volume = 0.1
    $('#searchBtn').click(function() {
        mute = document.getElementById('mute');
        loadingGifImage.classList.remove('d-none');
        stopSpeaking();
        query = $('#query').val();
        $.ajax({
            url: '/api/gemini', // Make sure this endpoint matches your Spring Boot controller
            method: 'GET',
            data: { query: query },
            success: function(response) {
                responseGiven = response;
                displayResponse(response);
                loadingGifImage.classList.add('d-none');
            },
            error: function(error) {
                $('#results').html('<p>Error: ' + error.responseText + '</p>');
            }
        });
    });

    function displayResponse(response) {
        var resultsDiv = $('#results');
        resultsDiv.empty();
        response = JSON.parse(response);

        if (response.candidates && response.candidates.length > 0) {
            var candidate = response.candidates[0];
            var content = candidate.content.parts.map(part => part.text).join(" ");
            $('#query').val('');
            // function convertToHtml(text) {
            //     // Escape HTML characters for safety
            //     text = text.replace(/&/g, "&amp;")
            //         .replace(/</g, "&lt;")
            //         .replace(/>/g, "&gt;")
            //         .replace(/"/g, "&quot;")
            //         .replace(/'/g, "&#039;");
            //
            //     // Convert markdown-like formatting to HTML
            //     // Convert **text** and __text__ to <strong>text</strong>
            //     text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            //     text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');
            //     // Convert *text* and _text_ to <em>text</em>
            //     text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
            //     text = text.replace(/_(.*?)_/g, '<em>$1</em>');
            //     // Convert ~~text~~ to <del>text</del>
            //     text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');
            //     // Convert [text](url) to <a href="url">text</a>
            //     text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
            //     // Convert `code` to <code>code</code>
            //     text = text.replace(/`(.*?)`/g, '<code>$1</code>');
            //     // Convert blockquotes > text to <blockquote>text</blockquote>
            //     text = text.replace(/^>\s*(.*)/gm, '<blockquote>$1</blockquote>');
            //     // Convert unordered list items * text to <ul><li>text</li></ul>
            //     text = text.replace(/^\*\s*(.*)/gm, '<ul><li>$1</li></ul>');
            //     // Convert ordered list items 1. text to <ol><li>text</li></ol>
            //     text = text.replace(/^\d+\.\s*(.*)/gm, '<ol><li>$1</li></ol>');
            //     // Convert line breaks for code blocks (ensure code blocks are preserved)
            //     text = text.replace(/\n/g, '<br>');
            //
            //     // Handle code blocks wrapped in triple backticks ```code``` (use <pre><code> for code blocks)
            //     text = text.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');
            //
            //     return text;
            // }

            var converter = new showdown.Converter(),
            // Convert the content
             htmlContent = converter.makeHtml(content);
            // Display the text content inside a Bootstrap card
            resultsDiv.html(`
            <div class="text-white text-end mb-2 fadeInUp" style="width: 750px">${query} : You</div>
            <div class="card text-white bg-dark mb-3 fadeInUp border-0" style="width: 750px;opacity: 0.95">
                <div class="card-body">
                   <div class="mb-2">
                   <img src="logoUpdated.png" style="width: 50px" class="rounded pe-2">ESOFT AI Says :
                   </div>
                    <p class="card-text">${htmlContent}</p>
                    <div class="btn btn-danger btn-sm" id="mute" onclick="stopSpeaking()"><i class='fa-solid fa-volume-xmark'></i></div>
                   
                </div>
            </div>
        `);
            speakNow(htmlContent)
        } else {
            resultsDiv.html('<p>No content available</p>');
        }
    }


});

const speakNow = (content)=>{
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(content);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[1]; // Choose a specific voice
    utterance.volume = 1;
    // Speak the text
    speechSynthesis.speak(utterance);
}

const stopSpeaking = () => {
    speechSynthesis.cancel();

}