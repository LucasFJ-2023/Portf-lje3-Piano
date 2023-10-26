const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white-key');
const blackKeys = document.querySelectorAll('.key.black-key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        playNote(key);
        animateKey(key);
    });
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
    noteAudio.currentTime = 0;
}

function animateKey(key) {
    key.classList.add('active');


    key.addEventListener('animationend', () => {
        key.classList.remove('active');
    });
}

const whiteKey = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKey = ['s', 'd', 'g', 'h', 'j'];

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = whiteKey.indexOf(key);
    const blackKeyIndex = blackKey.indexOf(key);

    if (whiteKeyIndex > -1) {
        const pressedKey = whiteKeys[whiteKeyIndex];
        playNote(pressedKey);
        animateKey(pressedKey);
    }

    if (blackKeyIndex > -1) {
        const pressedKey = blackKeys[blackKeyIndex];
        playNote(pressedKey);
        animateKey(pressedKey);
    }
});
