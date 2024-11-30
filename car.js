const toast = document.querySelector('.toast');
let position = 20;
let update = -300;

const audio = new Audio('sound.mp3');
const song = new Audio('rock.mp3');

// Ensure the audio loops
audio.loop = true;


window.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
            .then(() => console.log('Audio started successfully!'))
            .catch((err) => console.error('Error playing audio:', err));
    }
});

const car = document.querySelector('.car');

window.addEventListener('keydown', (e) => {
    let animated = document.querySelector(".track");
    console.log(e);

    if (e.key === "ArrowDown") {
        if (update < 0) {
            update += 10;
        }
        if (audio.volume > 0.2) {
            audio.volume -= 0.05;
        }
    } else if (e.key === "ArrowUp") {
        if (update > -600) {
            update -= 20;
        }
        if (audio.volume < 0.5) { 
            audio.volume += 0.05;
        }
    } else if (e.key === 'ArrowRight') {
        if (position < 75) {
            position += 4;
            car.style.left = `${position}%`;
        } else {
            song.play();
            toast.style.opacity = `1`;
            setTimeout(() => {
                toast.style.opacity = `0`; 
            }, 5000);
        }
        console.log(position);
    } else if (e.key === 'ArrowLeft') {
        if (position > 5) {
            position -= 3;
            car.style.left = `${position}%`;
        }
    }

    animated.style.transform = `translateX(${update}px)`;

   
    const newDuration = calculateAnimationDuration(update);
    console.log(newDuration);
    animated.style.animationDuration = `${newDuration}s`;

    console.log("this is update", update);
});

function calculateAnimationDuration(update) {
    const baseDuration = 5; 
    const maxUpdate = -700; 


    const durationMultiplier = baseDuration / Math.abs(maxUpdate);

   
    const newDuration = Math.abs(update) * durationMultiplier;

    return newDuration;
}
