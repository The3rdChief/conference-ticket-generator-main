/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import "../App.css";
import iconUpload from "../assets/images/icon-upload.svg";
import IconInfo from "./IconInfo";

const FormPage = (props) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [avatarFile, setAvatarFile] = useState("");
  const alertMsg = useRef(null);

  const [fullName, setFullName] = useState("");
  const fullNameRef = useRef(null);
  const [nameValidity, setNameValidity] = useState(true);

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [emailValidity, setEmailValidity] = useState(true);

  const [username, setUsername] = useState("");
  const usernameRef = useRef(null);
  const [usernameValidity, setUsernameValidity] = useState(true);

  const btnRef = useRef(null);
  const [data, setData] = useState({});

  const handleInputChange = (
    e,
    setterFunc,
    validitySetter,
    inputRef,
    value
  ) => {
    if (value == username) {
      setterFunc(e.target.value.trim());
    } else {
      setterFunc(e.target.value);
    }

    if (!inputRef.current.checkValidity()) {
      inputRef.current.style.borderColor = "hsl(7, 71%, 60%)";
      validitySetter(false);
    } else {
      if (value.trim() == "") {
        inputRef.current.style.borderColor = "hsl(7, 71%, 60%)";
        validitySetter(false);
        return;
      }
      inputRef.current.style.borderColor = "";
      validitySetter(true);
    }
  };

  const handleOnBlur = (e, setterFunc) => {
    if (!e.target.checkValidity()) {
      return;
    }
    if (e.target.value.trim() == "") {
      setterFunc(false);
      e.target.style.borderColor = "hsl(7, 71%, 60%)";
    } else {
      setterFunc(true);
      e.target.style.borderColor = "";
    }
  };

  // function to validate form
  const handleFormValidation = (e) => {
    e.preventDefault();

    if (!isUploaded) {
      alertMsg.current.style.color = "hsl(7, 71%, 60%)";
      return;
    }
    if (nameValidity && emailValidity && usernameValidity) {
      alertMsg.current.style.color = "";
      setData({
        fullName,
        email,
        username,
        avatarFile,
      });

      props.onSubmit(data);
      setTimeout(() => {
        if (Object.keys(data).length === 0) {
          btnRef.current.click();
        }
      }, 500);

      return;
    } else {
      console.log("form is not valid");
      return;
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[85vw] space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold max-w-[27ch]">
            Your Journey to Coding{" "}
            <abbr title="Conference" className="no-underline">
              Conf
            </abbr>{" "}
            2025 Starts Here
          </h1>
          <p className="text-gray-300">
            Secure your spot at next year&#39;s biggest coding conference
          </p>
        </header>

        <form
          onSubmit={handleFormValidation}
          className="space-y-8 max-w-lg mx-auto [&>div]:relative [&>div]:flex [&>div]:flex-col [&>div]:gap-2.5 [&>div>label]:w-max [&>div>label]:cursor-pointer [&>div>input]:bg-neut700/40 [&>div>input]:backdrop-blur-md [&>div>input]:rounded-lg [&>div>input]:h-14 [&>div>input]:px-4 [&>div>input]:border [&>div>input]:border-neut500 [&>div>input]:focus-within:outline-offset-4 [&>div>input]:focus-within:outline-2 [&>div>input]:transition-all [&>div>input]:duration-150 [&>div>input]:ease-in-out"
        >
          {/* image uploader */}
          <AvatarUploader
            isUploaded={isUploaded}
            setIsUploaded={setIsUploaded}
            avatarFile={avatarFile}
            setAvatarFile={setAvatarFile}
            alertMsg={alertMsg}
          />
          {/* name */}
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input
              ref={fullNameRef}
              type="text"
              name="name"
              id="full-name"
              maxLength={25}
              minLength={3}
              pattern="[a-zA-Z\s]*"
              value={fullName}
              onChange={(e) =>
                handleInputChange(
                  e,
                  setFullName,
                  setNameValidity,
                  fullNameRef,
                  fullName
                )
              }
              onBlur={(e) => handleOnBlur(e, setNameValidity)}
              className="focus:outline outline-neut500 hover:bg-neut700/80"
            />
            {!nameValidity && (
              <p className="text-sm flex items-center gap-2 absolute bottom-[-1.65rem] pointer-events-none text-orange500">
                <IconInfo /> Please enter a valid name
              </p>
            )}
          </div>
          {/* email */}
          <div>
            <label htmlFor="email-address">Email Address</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email-address"
              placeholder="example@email.com"
              maxLength={30}
              minLength={5}
              pattern="^\w+([.\-]?\w+)*@\w+([.\-]?\w+)*(\.\w{2,3})+$"
              value={email}
              onChange={(e) =>
                handleInputChange(
                  e,
                  setEmail,
                  setEmailValidity,
                  emailRef,
                  email
                )
              }
              onBlur={(e) => handleOnBlur(e, setEmailValidity)}
              className="focus:outline outline-neut500 hover:bg-neut700/80"
            />
            {!emailValidity && (
              <p className="text-sm flex items-center gap-2 absolute bottom-[-1.65rem] pointer-events-none text-orange500">
                <IconInfo /> Please enter a valid email address
              </p>
            )}
          </div>
          {/* github username */}
          <div>
            <label htmlFor="github-username">Github Username</label>
            <input
              ref={usernameRef}
              type="text"
              name="github"
              id="github-username"
              minLength={3}
              maxLength={20}
              pattern="^@\w+$"
              placeholder="@username"
              value={username}
              onChange={(e) =>
                handleInputChange(
                  e,
                  setUsername,
                  setUsernameValidity,
                  usernameRef,
                  username
                )
              }
              onBlur={(e) => handleOnBlur(e, setUsernameValidity)}
              className="focus:outline outline-neut500 hover:bg-neut700/80"
            />
            {!usernameValidity && (
              <p className="text-sm flex items-center gap-2 absolute bottom-[-1.65rem] pointer-events-none text-orange500">
                <IconInfo /> Please enter a valid username
              </p>
            )}
          </div>
          {/* button */}
          <button
            type="submit"
            ref={btnRef}
            className="bg-orange700 mt-4 hover:bg-orange700/80 active:bg-orange700/60 active:scale-95 transition-all duration-150 ease-in-out text-neut900 rounded-lg h-14 px-4 w-full font-bold focus-within:outline-offset-4 focus-within:outline-2 focus:outline outline-neut500 active:outline-none"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </>
  );
};

const AvatarUploader = ({
  isUploaded,
  setIsUploaded,
  avatarFile,
  setAvatarFile,
  alertMsg,
}) => {
  const inputState = isUploaded ? "pointer-events-none" : "pointer-events-auto";
  const inputRef = useRef(null);

  //   function to handle file upload
  const handleFileUpload = (e) => {
    setAvatarFile(e.target.files[0]);

    if (avatarFile.size > 5000000) {
      alertMsg.current.textContent = "File size must be less than 5mb";
      setIsUploaded(false);
    } else {
      alertMsg.current.textContent = "";
      alertMsg.current.style.color = "";
      setIsUploaded(true);
    }
  };

  //   function to remove image
  const removeImage = (e) => {
    e.preventDefault();
    setAvatarFile("");
    inputRef.current.value = null;
    alertMsg.current.textContent =
      "Upload your photo (JPG or PNG, max size 5MB)";
    setIsUploaded(false);
  };

  //   function to change image
  const changeImage = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <div
      className="flex flex-col gap-2.5"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setAvatarFile(droppedFile);
        if (droppedFile.size > 5000000) {
          alertMsg.current.textContent = "File size must be less than 5mb";
          setIsUploaded(false);
        } else {
          alertMsg.current.textContent = "";
          setIsUploaded(true);
        }
      }}
    >
      <label htmlFor="image-upload">Upload Avatar</label>
      <div
        id="avatar-uploader"
        className="grid place-items-center grid-cols-1 grid-rows-1 w-full bg-neut700/40 backdrop-blur-md rounded-lg p-6 border outline-neut500 border-dashed hover:bg-neut700/80"
      >
        <input
          type="file"
          name="image"
          id="image-upload"
          ref={inputRef}
          className={`opacity-0 cursor-pointer w-full h-full border-none col-start-1 row-start-1 ${inputState}`}
          onChange={(e) => handleFileUpload(e)}
        />

        <div className="flex flex-col gap-1 items-center text-gray-300 col-start-1 row-start-1">
          {!isUploaded && (
            <div className="flex flex-col gap-3 items-center pointer-events-none">
              <div className="size-12 grid place-items-center bg-neut700 border border-neut500 rounded-lg">
                <img src={iconUpload} />
              </div>
              <p className="text-center">Drag & drop or click to upload</p>
            </div>
          )}
          {isUploaded && (
            <div className="flex flex-col gap-3 items-center">
              <img
                src={URL.createObjectURL(avatarFile)}
                alt="user"
                className="size-12 rounded-lg object-cover border-2 border-neut500"
              />

              <div className="flex items-center gap-2.5 [&_button]:bg-neut500/60 [&_button]:px-4 [&_button]:py-1 [&_button]:rounded-lg [&_button]:transition-all [&_button]:duration-150 [&_button]:ease-in-out">
                <button
                  onClick={(e) => removeImage(e)}
                  className="hover:bg-neut500/80 active:bg-neut500/60 active:scale-95 outline-none focus:underline focus:bg-neut500/80"
                >
                  Remove image
                </button>
                <button
                  onClick={(e) => changeImage(e)}
                  className="hover:bg-neut500/80 active:bg-neut500/60 active:scale-95 outline-none focus:underline focus:bg-neut500/80"
                >
                  Change image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <p ref={alertMsg} className="text-sm text-gray-300">
        Upload your photo (JPG or PNG, max size 5MB)
      </p>
    </div>
  );
};

export default FormPage;
