const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

document.addEventListener('DOMContentLoaded', () => {
   const video = document.getElementById('video');
    const playPauseButton = document.getElementById('play-pause');
    const rewindButton = document.getElementById('rewind');
    const forwardButton = document.getElementById('forward');
    const volumeInput = document.getElementById('volume');
    const playbackSpeedInput = document.getElementById('playbackSpeed');
    const progressFilled = document.getElementById('progress__filled');
    const speedBar = document.getElementById('speed-bar');

    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
    });

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = '❚ ❚'; 
        } else {
            video.pause();
            playPauseButton.textContent = '►'; 
        }
    });
    rewindButton.addEventListener('click', () => {
        video.currentTime -= 10;
    });

    forwardButton.addEventListener('click', () => {
        video.currentTime += 25;
    });

    volumeInput.addEventListener('input', () => {
        video.volume = volumeInput.value / 100;
    });

    playbackSpeedInput.addEventListener('input', () => {
        video.playbackRate = playbackSpeedInput.value;
        speedBar.textContent = `${playbackSpeedInput.value}×`;
    });
	
});
