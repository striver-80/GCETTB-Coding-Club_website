const divs = document.querySelectorAll(".video-gallery-container .all-videos .video");

const videoPlayer = document.querySelector(".video-gallery-container .featured-video iframe");
const videoTitle = document.querySelector(".video-gallery-container .featured-video h2");

const showVideo = (videoID, title) => {
    let videoURL = `https://www.youtube.com/embed/${videoID}`;
    videoPlayer.setAttribute("src", videoURL);
    videoTitle.innerHTML = title;
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent.includes(title)) {
            divs[i].style.backgroundColor = '#e6e6e6';
        } else divs[i].style.backgroundColor = 'white';
    }
};
const eventListen = (v) => {
    v.addEventListener("click", () => {
        showVideo(v.dataset.id, v.dataset.title);
    });
}
divs.forEach(eventListen);
