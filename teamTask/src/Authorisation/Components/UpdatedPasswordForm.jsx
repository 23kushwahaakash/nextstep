import checkMark from "../Images/checkMark.png"
import { useNavigate } from "react-router-dom";

function UpdatedPasswordForm() {
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        navigate("/login");
    }

  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="md:w-[100%] flex justify-center items-center flex-col mt-20 mb-15">
            <img src={checkMark} alt="checkMark" className="w-15 h-15" />
            <h1 className=" mb-5 mt-5 text-2xl font-bold">Updated</h1>
            <h1>Congratulations! Your password is updated</h1>
            <h1 className="mb-20">successfully. Click continue to login</h1>
            <button 
           type="submit" 
           onClick={handleResetPassword}
           className="relative overflow-hidden bg-[#15294B] px-30 py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
          >
          <span className="relative z-10">Continue</span>
          <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
    </div>
  )
}

export default UpdatedPasswordForm
