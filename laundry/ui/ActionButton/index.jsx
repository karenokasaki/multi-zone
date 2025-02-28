import React from "react";
import { cn } from "../../lib/classNames";
import s from "./styles.module.scss";

const DEFAULT_LABEL = "shop now";
const DEFAULT_DATA_LABEL = "";
const DEFAULT_DATA_ACTION = "";
const DEFAULT_DATA_CATEGORY = "us:lg-discover-laundry";
const DEFAULT_VARIANT = "primary";
const DEFAULT_BUSINESS_UNIT = "ha";

/**
 * @typedef {'primary' | 'white'} ActionButtonVariants
 * @typedef {{
 *    href?: string;
 *    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
 *    label?: string;
 *    variant?: ActionButtonVariants;
 *    fullWidth?: boolean;
 *    className?: string;
 *
 *    contentDescription?: string;
 *    placementPosition?: number;
 *    assetPosition?: number;
 *    assetType?: "image" | "text" | "video";
 *    productName?: string;
 *    productId?: string;
 *    selectionText?: string;
 *    type?: string;
 *    target?: string;
 *
 * }} ActionButtonProps
 * @param {ActionButtonProps } props
 * @returns {React.FC<ActionButtonProps>}
 */
const ActionButton = (props) => {
  return (
    <div
      className={cn(
        "cta select-none cursor-pointer !h-fit",
        props.className && props.className,
        s[`variant_${props.variant || DEFAULT_VARIANT}`]
      )}
    >
      <a
        href={props.href}
        className={cn("newbtn", props.fullWidth && s.full_width)}
        data-ms-event="bs_lg_event"
        data-ms-fnt_flag="f"
        data-ms-fnt_bu="ha"
        data-ms-fnt_type={props.type}
        data-ms-fnt_content_desc={props.contentDescription}
        data-ms-fnt_placement_position={props.placementPosition}
        data-ms-fnt_asset_position={props.assetPosition}
        data-ms-fnt_asset_type={props.assetType}
        data-ms-fnt_product_name={props.productName || "undefined"}
        data-ms-fnt_product_id={props.productId || "undefined"}
        data-ms-fnt_selection_text={props.selectionText}
        tabIndex={0}
        onClick={props.onClick}
        target={props.target || null}
      >
        {props.label || DEFAULT_LABEL}
      </a>
    </div>
  );
};

export default ActionButton;
