import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/classNames";
import s from "./styles.module.scss";
import useOnResize from "../../hooks/useOnResize";
import formatParagraph from "../../lib/formatParagraph";

/**
 * @typedef {{title: string, copy: string}} AccordionItem
 * @param {{accordion: AccordionItem[]}} props
 */
export default function Component(props) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className={s["wrapper"]}>
      <div className={s["content"]}>
        {props.accordion.map((item, idx) => (
          <AccordionItem
            key={`accordion-item_${item.title.replace(/ /g, "-")}_idx`}
            active={idx === openIdx}
            onClick={() => {
              setOpenIdx(idx === openIdx ? null : idx);
              props.setActive(item.title);
            }}
            item={item}
            endItem={idx === 0 || idx === props.accordion.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/**
 *
 * @param {{active: boolean; onClick: () => {}; item: AccordionItem; endItem: boolean}} props
 */
function AccordionItem(props) {
  const copyRef = useRef(null);
  const BASE_HEIGHT = 53;
  const BOTTOM_PADDING = 14;
  const [height, setHeight] = useState(BASE_HEIGHT);

  const evalHeight = () => {
    if (props.active) {
      if (props.endItem) {
        setHeight(BASE_HEIGHT + copyRef.current.scrollHeight);
      } else {
        setHeight(BASE_HEIGHT + copyRef.current.scrollHeight + BOTTOM_PADDING);
      }
    } else {
      if (props.endItem) {
        setHeight(BASE_HEIGHT - BOTTOM_PADDING);
      } else {
        setHeight(BASE_HEIGHT);
      }
    }
  };

  useOnResize(evalHeight, 300);

  useEffect(() => {
    evalHeight();
  }, [copyRef, props.active]);

  return (
    <div
      className={cn(s["item"], props.active && s["item_open"])}
      style={{ height }}
    >
      <div className={s["item-header"]} onClick={props.onClick}>
        <h5>{formatParagraph(props.item.title)}</h5>
        <img src="/laundry/assets/svg/expand-icon.svg" alt="" />
      </div>
      <div className={s["item-copy"]} ref={copyRef}>
        <p>{props.item.copy}</p>
      </div>
    </div>
  );
}
