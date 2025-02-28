import { useRef, useEffect, useMemo } from "react";

export default function DynamicVideo(props) {
  const videoEl = useRef(null);

  const content = useMemo(
    () => [
      { src: props.srcMobile, media: "(max-width: 575px)" },
      { src: props.srcTablet, media: "(max-width: 991px)" },
      { src: props.srcDesktop, media: "" },
    ],
    []
  );

  useEffect(() => {
    if (videoEl.current) {
      if (window.innerWidth < 576) {
        if (videoEl.current) videoEl.current.src = props.srcMobile;
      } else if (window.innerWidth > 576 && window.innerWidth < 991) {
        if (videoEl.current) videoEl.current.src = props.srcTablet;
      } else if (window.innerWidth > 768) {
        if (videoEl.current) videoEl.current.src = props.srcDesktop;
      }
    }
  }, [props.srcTablet, props.srcDesktop, props.srcMobile, videoEl]);

  useEffect(() => {
    if (videoEl.current) {
      window.addEventListener("resize", () => {
        if (videoEl.current) {
          if (window.innerWidth < 576) {
            if (videoEl.current) videoEl.current.src = props.srcMobile;
          } else if (window.innerWidth > 576 && window.innerWidth < 991) {
            if (videoEl.current) videoEl.current.src = props.srcTablet;
          } else if (window.innerWidth > 991) {
            if (videoEl.current) videoEl.current.src = props.srcDesktop;
          }
        }
      });
    }
  }, [videoEl]);

  return (
    <video
      muted
      playsInline
      loop
      autoPlay
      ref={videoEl}
      className={props.videoClass}
    >
      {content.map(({ src, media }) => {
        return <source key={src} src={src} media={media} type="video/mp4" />;
      })}
      Your browser does not support the video tag.
    </video>
  );
}
