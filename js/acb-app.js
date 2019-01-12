let tracks = [
    {
        id: 1,
        copy: "666",
        src: "666-alv.mp3"
    },

    {
        id: 2,
        copy: "Aleo Aleo (Arms on Shoulders)",
        src: "aleo.mp3"
    },

    {
        id: 3,
        copy: "Blue White and Gold!",
        src: "blue-white-and-gold.mp3"
    },

    {
        id: 4,
        copy: "Until The Day We’re Gray and Old",
        src: "grey-and-old.mp3"
    },

    {
        id: 5,
        copy: "Blue White And Gold In My Heart And Soul",
        src: "heart-and-soul.mp3"
    },

    {
        id: 6,
        copy: "Na Na Hey Hey Galaxy!",
        src: "hey-hey-hey-galaxy.mp3"
    },

    {
        id: 7,
        copy: "Let’s Go LA! (Call & Response)",
        src: "lets-go-la.mp3"
    },

    {
        id: 8,
        copy: "LO LO LO LO - LOL",
        src: "lolololo-lol.mp3"
    },

    {
        id: 9,
        copy: "Oh Campione",
        src: "oh-campeone.mp3"
    },

    {
        id: 10,
        copy: "Y Vamos Angelinos",
        src: "y-vamos-angelinos.mp3"
    },

    {
        id: 11,
        copy: "Vamos Angelinos",
        src: "vamos-angelinos.mp3"
    },

    {
        id: 12,
        copy: "Vamos Galaxy",
        src: "vamos-galaxy.mp3"
    },

    {
        id: 13,
        copy: "We Love Ya!",
        src: "we-love-ya.mp3"
    },

    {
        id: 14,
        copy: "When You're In Blue",
        src: "when-youre-in-blue.mp3"
    }
];
const tracksSetup = () => {
    const trackList = `<ul class="audio-tracks">
    ${tracks
            .map(track =>
                `<li class="track" id="${track.id}" data-src="${track.src}" data-copy="${track.copy}">
            <p>${track.copy}</p>
        </li>`.trim()
            )
            .join("")}
    </ul>`;
    document.getElementsByClassName(
        "audio-tracks-container"
    )[0].innerHTML = trackList;
};

const addListeners = () => {
    const trackEls = Array.from(document.querySelectorAll(".track"));
    console.log(trackEls);
    trackEls.forEach(function (track) {
        console.log(track.dataset.src, "event added");
        track.addEventListener("click", function () {
            removeActive(trackEls);
            console.log(`clicked ${track.dataset.src}`);
            updateAudio(track);
        });
    });
};
const removeActive = (arr) => {
    arr.forEach(function (track) {
        track.classList.remove('active');
    })
}
const updateAudio = track => {
    let player = document.getElementById("audio-player");
    document.getElementById("track-src").src = `./assets/audio/${
        track.dataset.src
        }`;
    player.load();
    document.getElementsByClassName("currently-playing-copy")[0].innerHTML =
        track.dataset.copy;
    track.classList.add('active');
    setTimeout(() => {
        player.play();
    }, 1500);
};

tracksSetup();
addListeners();
document.getElementById('1').classList.add('active');
