import { useState } from "react";
import confLogo from "../assets/images/logo-full.svg";
import FormPage from "./FormPage";
import TicketPage from "./TicketPage";

const MainApp = () => {
  const [userData, setUserData] = useState({});

  const getData = (data) => {
    setUserData(data);
  };

  return (
    <>
      <div className="relative z-10 text-white pt-10 pb-24 flex flex-col gap-16 items-center">
        <header>
          <img src={confLogo} alt="logo" />
        </header>

        <section className="flex flex-col relative">
          {Object.keys(userData).length === 0 ? (
            <FormPage onSubmit={getData} />
          ) : (
            <TicketPage data={userData} />
          )}
        </section>
      </div>
    </>
  );
};

export default MainApp;
