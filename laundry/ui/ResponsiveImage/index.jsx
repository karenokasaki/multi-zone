/**
 *
 * @param {{
 *      tabletBreakpoint?: number;
 *      desktopBreakpoint?: number;
 *      className?: string;
 *      m: string;
 *      t: string;
 *      d: string;
 *      alt: string;
 * }} props
 */
export default function Component(props) {
  return (
    <picture className={props.className || ""}>
      <source
        srcSet={props.d}
        media={`(min-width: ${props.desktopBreakpoint || 1200}px)`}
      />
      <source
        srcSet={props.t}
        media={`(min-width: ${props.tabletBreakpoint || 576}px)`}
      />
      <img src={props.m} alt={props.alt} />
    </picture>
  );
}
