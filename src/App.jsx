import lines from "./assets/images/pattern-lines.svg";
import squigglyLineTop from "./assets/images/pattern-squiggly-line-top.svg";
import squigglyLineBottom from "./assets/images/pattern-squiggly-line-bottom.svg";
import circle from "./assets/images/pattern-circle.svg";
import MainApp from "./components/MainApp";

function App() {
  return (
    <>
      <main className=" bg-[url('./assets/images/background-mobile.png')] sm:bg-[url('./assets/images/background-tablet.png')] lg:bg-[url('./assets/images/background-desktop.png')] bg-cover bg-no-repeat min-h-dvh relative font-inconsolata">
        {/* background components */}
        <img src={squigglyLineTop} alt="" className="absolute top-10 right-0" />
        <img
          src={squigglyLineBottom}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <div className="absolute top-0 left-0 right-0 min-h-[80vh] h-[80%] bg-transparent overflow-clip">
          <img
            src={lines}
            alt=""
            className="h-full w-full object-cover min-w-[550px]"
          />
          <img
            src={circle}
            alt=""
            className="absolute -top-12 left-8 size-32"
          />
          <img
            src={circle}
            alt=""
            className="absolute bottom-0 -right-8 sm:right-[20%] size-40"
          />
        </div>
        {/* end of background components */}
        <MainApp />
      </main>
    </>
  );
}

export default App;
