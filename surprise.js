function showFullScreenImageWithSound(imageUrl, soundUrl) {
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        zIndex: '9999'
    });

    const img = document.createElement('img');
    img.src = imageUrl;
    Object.assign(img.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100%',
        maxHeight: '100%'
    });

    const audio = new Audio(soundUrl);
    audio.play().catch(err => {
        console.warn('Autoplay failed:', err);
    });

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    setTimeout(() => {
        document.body.removeChild(overlay);
        audio.pause();
        audio.currentTime = 0;
    }, 5000);
}

showFullScreenImageWithSound(
    'https://c.tenor.com/9v5b6qQJyZcAAAAC/tenor.gif',
    'https://www.soundjay.com/button/beep-07.wav'
);
