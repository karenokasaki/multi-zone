import { LGHeader, LGFooter } from "./LGcom";

export const LGcomLayout = (props) => {
  return (
    <div className="iw_viewport-wrapper">
      <LGHeader />
      {/********** Custom page starts here **********/}
      <main>{props.children}</main>
      {/*********************************************/}
      <LGFooter />
    </div>
  );
};
