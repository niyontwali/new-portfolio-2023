import Head from "next/head";
import { Fragment, useState } from "react";
const colors = [
  { id: 1, name: "yellow" },
  { id: 2, name: "blue" },
  { id: 3, name: "orange" },
];
const Switcher = () => {
  const [color, setColor] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={`css/skins/${color}.css`} />
      </Head>
      <div
        id="switcher"
        className={toggle ? "open" : "close"}
        style={{ display: "block" }}
      >
        <div className="content-switcher">
          <h4>Change Theme</h4>
          <ul>
            {colors.map((color) => (
              <li>
                <a
                  href="#"
                  title={color.name}
                  className="color"
                  key={color.id}
                  onClick={() => setColor(color.name)}
                >
                  <img
                    src={`assets/styleswitcher/${color.name}.png`}
                    alt={color.name}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className={`styleSecondColor ${toggle ? "close" : "open"}`}
        onClick={() => setToggle(true)}
      >
        <i className="fa fa-cog" />
      </div>
    </Fragment>
  );
};
export default Switcher;
