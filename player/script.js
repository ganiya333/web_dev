const audio = document.getElementById('audio-player');
const tracks = [
    { name: "abba", cover: "abba_photo.png", url: "abba.mp3" },
    { name: "Дождь", cover: "song.jpeg", url: "дождь.mp3" },
    { name: "rose", cover: "rose.jpeg", url: "rose.mp3" },
    { name: "protect", cover: "wutang.jpeg", url: "protect.mp3" },
];
let currentTrackIndex = 0;
const trackCover = document.getElementById('track-cover');
const playPauseBtn = document.getElementById('play-pause-btn');
const nextBtn = document.getElementById('next-btn');
const trackList = document.getElementById('track-list');

function updateTrackDetails() {
    const track = tracks[currentTrackIndex];
    trackCover.src = track.cover;
    document.getElementById('track-name').textContent = track.name; 
    document.getElementById('artist-name').textContent = track.artist;
    audio.src = track.url;  
    audio.load(); 
    playPauseBtn.textContent = 'Play';
}
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}
function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; 
    updateTrackDetails();  
    audio.play();  
}
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextTrack);

tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.name;
    li.onclick = () => {
        currentTrackIndex = index;
        updateTrackDetails();
    };
    trackList.appendChild(li);
});

updateTrackDetails();
