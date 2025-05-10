function showFullScreenImageWithSound(imageUrl, soundUrl, bottomText = '') {
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

    if (bottomText) {
        const text = document.createElement('div');
        text.textContent = bottomText;
        Object.assign(text.style, {
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: '3em',
            fontWeight: 'bold',
            fontFamily: '"Impact", "Arial Black", sans-serif',
            textShadow: '2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black',
            textAlign: 'center',
            pointerEvents: 'none'
        });
        overlay.appendChild(text);
    }

    overlay.appendChild(img);
    document.body.appendChild(overlay);
}

showFullScreenImageWithSound(
    'https://c.tenor.com/9v5b6qQJyZcAAAAC/tenor.gif',
    'https://www.soundjay.com/button/beep-07.wav',
    'BRUH MOMENT'
);
