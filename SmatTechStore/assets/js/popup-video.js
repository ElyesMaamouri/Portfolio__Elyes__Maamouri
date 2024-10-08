


const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('close-popup-btn');
const popupOverlay = document.getElementById('popup-overlay');
const youtubeVideo = document.getElementById('youtube-video');


openPopupBtn.onclick = function() {
    popupOverlay.style.display = 'flex';
    youtubeVideo.src = 'https://www.youtube.com/embed/eDqfg_LexCQ?si=WN-hvQFM8BAqZwbi'; 
};

closePopupBtn.onclick = function() {
    popupOverlay.style.display = 'none';
    youtubeVideo.src = '';
};

window.onclick = function(event) {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
        youtubeVideo.src = '';
    }
};
