/* eslint-disable react/prop-types */

import ticketBg from "../assets/images/pattern-ticket.svg";
import githubLogo from "../assets/images/icon-github.svg";
import logoMark from "../assets/images/logo-mark.svg";

const TicketPage = ({ data }) => {
  return (
    <div className="flex flex-col gap-20 items-center mx-auto max-w-[85vw]">
      <header className="text-center flex items-center flex-col gap-9">
        <h2 className="text-4xl sm:text-5xl font-bold max-w-[27ch]">
          Congrats,{" "}
          <span className="bg-clip-text text-transparent capitalize bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)]">
            {data.fullName}
          </span>
          ! Your ticket is ready.
        </h2>

        <p className="text-gray-300 text-lg leading-6 max-w-[42ch]">
          We&#39;ve emailed your ticket to{" "}
          <span className="text-orange700">{data.email}</span> and will send
          updates in the run up to the event.
        </p>
      </header>

      <div className="grid grid-cols-1 grid-rows-1 min-h-40 min-w-72 relative">
        <img
          src={ticketBg}
          className="col-start-1 row-start-1 col-end-2 row-end-2 min-h-full w-full  self-center justify-self-center"
        />
        <div className="col-start-1 row-start-1 col-end-2 row-end-2 flex flex-col p-4 sm:p-8 justify-between">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="flex items-center gap-3 sm:gap-6 text-2xl sm:text-4xl font-bold">
              <img src={logoMark} alt="logo" className="max-w-5 sm:max-w-8" />{" "}
              <span>Coding Conf</span>
            </h3>
            <p className="text-gray-300 text-sm pl-8 sm:pl-14">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-5">
            <img
              src={URL.createObjectURL(data.avatarFile)}
              alt=""
              className="size-10 sm:size-16 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-between">
              <h4 className="sm:text-2xl">{data.fullName}</h4>
              <p className="flex items-center gap-1 text-xs sm:text-base">
                <img src={githubLogo} alt="git" />
                {data.email}
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-400 uppercase text-xl sm:text-2xl absolute rotate-90 top-1/2 -translate-y-1/2 right-[0.5%] sm:right-4">
          #01609
        </p>
      </div>
    </div>
  );
};

export default TicketPage;
