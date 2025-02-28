import React, { useEffect, useState } from "react";
import { cn } from "../../lib/classNames";
import s from "./styles.module.scss";

/**
 *
 * @typedef {{
 *    content: {[key:string]: React.FC},
 *    contentClass: string
 * }} TabsProps
 * @param {TabsProps} props
 * @returns {React.FC<TabsProps>}
 */

const Tabs = (props) => {
  const tabs = Object.keys(props.content);
  const [tab, setTab] = useState(tabs.at(0));

  return (
    <div>
      <ol className={s["tabs"]}>
        {tabs.map((k) => (
          <li className={cn(s["tab"], k === tab && s["tab_active"])}>
            <button onClick={setTab.bind(null, k)}>
              <span>{k}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className={cn(s["content"], props.contentClass)}>
        {tabs.map((t, i) => {
          const isVisible = t === tab;
          return (
            <div
              key={t + "_" + i}
              aria-hidden={!isVisible}
              className={cn(
                s["content-inner"],
                isVisible && s["content-inner_visible"]
              )}
            >
              {typeof props.content[tab] === "function"
                ? React.createElement(props.content[tab], {})
                : props.content[tab]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
