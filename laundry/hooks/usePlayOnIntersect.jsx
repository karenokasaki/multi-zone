import React from "react";

/**
 *
 * @param {React.Ref<HTMLVideoElement>} videoRef
 * @param {{rootMargin: string, threshold: number}} opts
 */
export default function usePlayOnIntersect(videoRef, opts) {
  if (!opts) {
    opts = { root: null, rootMargin: "0px", threshold: 0 };
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      });
    }, opts);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);
}
