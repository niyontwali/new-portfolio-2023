import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import MyHead from "@/src/MyHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <MyHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
