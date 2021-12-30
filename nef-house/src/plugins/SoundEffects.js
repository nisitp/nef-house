const SoundEffects = {
    install(Vue, options) {
        var enabled = true;

        const sounds = {
            'background': new Audio(require("../assets/sounds/background.mp3")),
            'voiceover': new Audio(require("../assets/sounds/voiceover.mp3")),
            'baby-happy': new Audio(require("../assets/sounds/character-baby-happy.mp3")),
            'baby-sad': new Audio(require("../assets/sounds/character-baby-sad.mp3")),
            'baby-content': new Audio(require("../assets/sounds/character-baby-content.mp3")),
            'fish-happy': new Audio(require("../assets/sounds/character-fish-happy.mp3")),
            'fish-sad': new Audio(require("../assets/sounds/character-fish-sad.mp3")),
            'fish-content': new Audio(require("../assets/sounds/character-fish-content.mp3")),
            'robot-happy': new Audio(require("../assets/sounds/character-robot-happy.mp3")),
            'robot-sad': new Audio(require("../assets/sounds/character-robot-sad.mp3")),
            'robot-content': new Audio(require("../assets/sounds/character-robot-content.mp3")),
            'dog-happy': new Audio(require("../assets/sounds/character-dog-happy.mp3")),
            'dog-sad': new Audio(require("../assets/sounds/character-dog-sad.mp3")),
            'dog-content': new Audio(require("../assets/sounds/character-dog-content.mp3")),
            'grandpa-happy': new Audio(require("../assets/sounds/character-grandpa-happy.mp3")),
            'grandpa-sad': new Audio(require("../assets/sounds/character-grandpa-sad.mp3")),
            'grandpa-content': new Audio(require("../assets/sounds/character-grandpa-content.mp3")),
        };

        for(let sound in sounds) {
            sounds[sound].mutedState = false;
        }

        sounds.background.loop = true;

        var play = (sound) => {
            if(typeof sounds[sound] != "undefined") {
                sounds[sound].pause();
                sounds[sound].currentTime = 0;
                sounds[sound].play();

                if(process.env.NODE_ENV == "development") {
                    console.log('PLAYING', sound);
                }
            }
        };

        var stop = (sound) => {
            if(typeof sounds[sound] != "undefined") {
                sounds[sound].pause();
                sounds[sound].currentTime = 0;

                if(process.env.NODE_ENV == "development") {
                    console.log('STOPPED', sound);
                }
            }
        };

        var mute = (sound, muted) => {
            if(typeof sounds[sound] != "undefined") {
                sounds[sound].currentTime = 0;
                sounds[sound].mutedState = muted;
                sounds[sound].muted = !(!sounds[sound].mutedState && enabled);

                if(process.env.NODE_ENV == "development") {
                    console.log('MUTED', sound, muted);
                }
            }
        };

        var toggle = () => {
            enabled = !enabled;
            for(let sound in sounds) {
                sounds[sound].muted = !(!sounds[sound].mutedState && enabled);
            }
        };

        Vue.prototype.$soundEffects = {
            play(sound) { play(sound); },
            stop(sound) { stop(sound); },
            mute(sound, muted) { mute(sound, muted); },
            toggle() { toggle(); }
        }

        // Turn Sound off while debugging
        if(process.env.NODE_ENV == "development") toggle();
    }
};

export default SoundEffects;
