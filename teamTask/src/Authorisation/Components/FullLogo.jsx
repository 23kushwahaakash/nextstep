import logo from "../Images/logo.png"

function FullLogo() {
  return (
    <div className="mb-8 flex justify-center flex-col items-center">
      <img src={logo} alt=" next-step logo" className="h-15 w-15"/>
      <h1 className="text-xl text-[#15294B] mt-5 hidden md:block font-semibold">Your work people are here</h1>
      <p className="text-xs hidden md:block">Sign up now to get started with an account</p>
    </div>
  )
}

export default FullLogo
