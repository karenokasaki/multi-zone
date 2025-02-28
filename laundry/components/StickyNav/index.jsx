import s from "./StickyNav.module.scss";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function StickyNav() {
  const links = [
    { title: "Washer", url: "https://www.lg.com/us/washers" },
    { title: "Dryer", url: "https://www.lg.com/us/dryers" },
    {
      title: "Single Unit Solutions",
      url: "https://www.lg.com/us/washer-dryer-combos",
    },
    { title: "Styler", url: "https://www.lg.com/us/styler-steam-closet" },
    { title: "Pedestals", url: "https://www.lg.com/us/pedestal-washers" },
    { title: "Accessories", url: "https://www.lg.com/us/laundry-accessories" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const navMobileRef = useRef();
  useOnClickOutside(navMobileRef, () => setNavOpen(false));

  return (
    <div className={s.wrapper} ref={navMobileRef}>
      <div className={s.container}>
        <div className={s.left_side}>
          <p>Laundry</p>
          <div className={s.icon} onClick={() => setNavOpen(!navOpen)}>
            <img alt="Navbar Icon" src="/laundry/assets/svg/navbar.svg" />
          </div>
          <a href="/">BACK TO HOME</a>
        </div>

        {/* desktop */}
        <div className={s.link_list}>
          <ul className={s.links}>
            {links.map((link, index) => (
              <li key={index} className={s.link}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.link_list_mobile} data-nav-open={navOpen}>
          <ul className={s.links_mobile}>
            {links.map((link, index) => (
              <li key={index} className={s.link_mobile}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
