
document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
    }, 500); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }


});

const removeAnimation = ()=>{
    searchBtn.classList.remove('popup')
}

const pauseMusic=()=> {
    backgroundMusic.pause();
}