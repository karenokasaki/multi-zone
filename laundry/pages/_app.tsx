/** %%layout_import_start%% */
import "../styles/LG/skeleton.css";
import "../styles/LG/bootstrap.scss";
import "../styles/LG/lg-default.scss";
import "../styles/LG/components.css";
import "../styles/LG/hsad-package.css";
/** %%layout_import_end%% */

import "../styles/LG/plugins/slick/slick.css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
