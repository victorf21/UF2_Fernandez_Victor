document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        }
    });

    pauseButton.addEventListener("click", () => {
        if (video.played) {
            video.pause();
        }
    });

});