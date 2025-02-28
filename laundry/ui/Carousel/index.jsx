import React, { useEffect, useMemo, useRef } from "react";
import Slider from "react-slick";
import s from "./styles.module.scss";

/**
 *
 * @typedef {{
 *      settings?: React.ComponentProps<typeof Slider>;
 * }} CarouselProps
 * @param {CarouselProps} props
 * @returns {React.FC<React.PropsWithChildren<CarouselProps>>}
 */
const Carousel = (props) => {
  const wrapperRef = useRef(null);
  const dots = useRef();

  useEffect(() => {
    if (wrapperRef.current) {
      dots.current = wrapperRef.current
        ?.getElementsByClassName("slick-dots")
        .item(0)
        ?.querySelectorAll("li");
    }
  }, [wrapperRef]);

  const settings = useMemo(
    () => ({
      dots: true,
      speed: 500,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      ],
      ...props.settings,
    }),
    []
  );

  settings.beforeChange = (prev, curr) => {
    const page = Math.round(
      parseFloat(curr.toFixed(1)) / settings.slidesToScroll
    );
    dots.current?.forEach((el, i) => {
      /* if (i === page) el.classList.add("slick-active");
      else el.classList.remove("slick-active"); */
    });
    /** allow user to set a callback here */
    if (typeof props.settings?.beforeChange === "function") {
      props.settings.beforeChange(prev, curr);
    }
  };

  return (
    <div id="carouselgrep" ref={wrapperRef} className={s["carousel"]}>
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default Carousel;
