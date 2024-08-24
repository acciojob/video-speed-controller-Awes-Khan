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
	
    rewindButton.addEventListener('click', () => {
        video.currentTime -= 10;
    });

    forwardButton.addEventListener('click', () => {
        video.currentTime += 25;
    });
}
