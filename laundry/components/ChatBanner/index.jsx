import ActionButton from "/ui/ActionButton";
import s from "./ChatBanner.module.scss";

export default function ChatBanner() {
  function handleClick() {
    if (window.sprChat) {
      window.sprChat("open");
    } else {
      alert("Chatbot not initialized on this page.");
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.image}>
          <picture>
            <source
              srcSet="/laundry/assets/images/chat-image.jpg"
              media="(min-width: 1100px)"
            />
            <img
              src="/laundry/assets/images/chat-image-m.jpg"
              alt="Image for LG Product Experts are available to chat right now"
            />
          </picture>
        </div>
        <div className={s.content}>
          <h2 className={s.title}>
            LG Product Experts are available to chat right now
          </h2>
          <p className={s.copy}>
            Whether you are just starting your research or have narrowed down
            your search, LG Product Experts are available to help you find the
            product that is right for you.
          </p>
          <div
            onClick={handleClick}
            style={{ cursor: "pointer", width: "fit-content" }}
          >
            <ActionButton label="Start Chat" />
          </div>
        </div>
      </div>
    </div>
  );
}
