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
    'https://www.bing.com/th/id/OGC.f8893f144a854bc411653a273cc4a2e1?o=7&cb=iwp1&pid=1.7&rm=3&rurl=https%3a%2f%2fgifsec.com%2fwp-content%2fuploads%2f2022%2f10%2frickroll-gif-1.gif&ehk=V0uvU5QMbfHEkipMOiYoNfI6YBkVmqb4%2b4bhk595bA4%3d',
    'https://www.soundjay.com/button/beep-07.wav'
);
