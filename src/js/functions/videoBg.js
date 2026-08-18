export default function videoBg() {
  const videos = document.querySelectorAll(".video-bg");

  if (videos.length) {
    setTimeout(() => {
      videos.forEach((video) => {
        if (!video.src) {
          const src = video.dataset.src;
          video.src = src;
        }
      });
    }, 500);
  }
}
