const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    document.getElementById('rewind').addEventListener('click', () => {
        video.currentTime -= 10;
    });

    const playPauseButton = document.getElementById('play-pause');
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = '❚ ❚'; 
        } else {
            video.pause();
            playPauseButton.textContent = '►'; 
        }
    });