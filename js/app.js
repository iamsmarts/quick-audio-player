let tracks = [
  {
    id: 1,
    copy: "GBS Talks About The Team",
        src: "gbs-speaks-about-the-team.mp3"
  },
  {
    id: 2,
    copy: "GBS Talks About Tactics, and Boca",
      src: "gbs-speaks-about-style-and-boca.mp3"
  },
  {
    id: 3,
    copy: "DTK Talks About Roster",
      src: "dtk-talks-about-roster.mp3"

  },
  {
    id: 4,
    copy: "DTK Talks About Dom",
      src: "dtk-talks-dom.mp3"

  },
  {
    id: 5,
    copy: "GBS Press Conf Clip 1",
    src: "gbs1.mp3"
  },
  {
    id: 6,
    copy: "GBS Press Conf Clip 2",
    src: "gbs2.mp3"
  },
  {
    id: 7,
    copy: "GBS Press Conf Clip 3",
    src: "gbs3.mp3"
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
  trackEls.forEach(function(track) {
    console.log(track.dataset.src, "event added");
    track.addEventListener("click", function() {
      removeActive(trackEls);
      console.log(`clicked ${track.dataset.src}`);
      updateAudio(track);
    });
  });
};
const removeActive = (arr)=>{
    arr.forEach(function(track){
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
