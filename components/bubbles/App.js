import dynamic from "next/dynamic";
import Scene from "./Scene";

const LCanvas = dynamic(() => import("./Scene"), {
  ssr: false,
});

export const App = () => {
  return (
    <div className="app">
      <div className="content">
        <LCanvas />
        <div className="header">
          <h1 className="header__name">
            Andrew Ho
            <br />
            <span className="header__description">Software engineer</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
