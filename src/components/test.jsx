<div
className={`${
  !start ? "animate-bounce-slow" : "rounded-full"
} transition-all duration-300`}
>
{!start && (
  <div>
    <span className="animate-pulse flex w-full justify-center">
      Click Here
    </span>
    <BsCaretDownFill
      className={`${
        !start ? "animate-pulse" : ""
      }flex w-full text-2xl`}
    />
  </div>
)}
<div className={`${!start ? "" : "image-container"}`}>
  <img
    src={image}
    alt="Ibrahim"
    className={`hero-image ${
      !start
        ? "animate-pulse cursor-pointer border-2 border-solid rounded-full p-1"
        : ""
    }`}
    onClick={handleImageClick}
  />
</div>
{start && (
  <div className="absolute flex flex-col gap-0">
    <Lottie
      animationData={codeAnimation}
      className="absolute -top-44 transform left-24 animate-spin-slow w-14"
    />
  </div>
)}
</div>{" "}



<div className="flex flex-nowrap w-full gap-1">
          <BsFillPatchCheckFill className="text-blue-400 flex w-full p-0 ml-16 justify-end text-base" />
          {start && (
            <div className="social-media absolute flex flex-col lg:flex-row items-center justify-center top-40 left-20 gap-4 text-lg">
              <h1 className="w-32 text-lg">Check out My </h1>
              <div className="flex items-center justify-center m-10 gap-4">
                <a
                  href="#"
                  className={`border border-solid  rounded-full p-1.5 ${linkedClass}`}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className={`border border-solid  rounded-full p-1.5 ${linkedClass}`}
                >
                  <BsInstagram />
                </a>
                <a
                  href="#"
                  className={`border border-solid  rounded-full p-1.5 ${linkedClass}`}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          )}
        </div>







      {/* <div className="col-span-1 hidden lg:flex flex-col items-center lg:items-start">
        <Lottie animationData={devAnimation} className="w-60" />
      </div>