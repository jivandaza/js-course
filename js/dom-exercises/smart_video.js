export default function handleSmartVideo(tag) {
  const $videos = document.querySelectorAll(`video[${tag}]`);
  const makeSmart = (videos) => {
    videos.forEach((video) => {
      video.isIntersecting ? video.target.play() : video.target.pause();
    });
  };
  const observer = new IntersectionObserver(makeSmart, {
    threshold: 0.7,
  });
  $videos.forEach((video) => observer.observe(video));
}
