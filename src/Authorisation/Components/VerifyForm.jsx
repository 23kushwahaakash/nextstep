import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function VerifyForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!email) {
      toast.error("No email found. Please sign up again.");
      navigate('/signup');
    }
  }, [email, navigate]);

  const handleChange = (index, value) => {
    if (value.length > 1) value = value.slice(0, 1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      toast.error("Please enter all 6 digits");
      return;
    }

    if (!email) {
      toast.error("Email is missing. Please sign up again.");
      navigate('/signup');
      return;
    }

    setIsLoading(true);

    try {
      const requestData = {
        email: email,
        otp: otpValue
      };

      console.log("Sending OTP verification:", requestData);

      const response = await axios.post(
        "https://job-seeking-app-1-5auy.onrender.com/api/v1/user/verifyOTP",
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("OTP Verification Successful:", response.data);
      toast.success("OTP verified successfully!");

      navigate('/login');

    } catch (error) {
      console.error("OTP Verification Failed:", error.response ? error.response.data : error.message);
      toast.error("OTP Verification Failed! " + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-full bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5">
      <div className="md:w-full flex justify-center items-center flex-col mb-10">
        <div className="flex gap-35 w-full">
          <button
            onClick={() => window.history.back()}
            className="hover:shadow-xl border flex justify-center items-center border-gray-300 w-12 rounded-4xl mt-2 ml-2 h-12"
            type="button"
          >
            <ArrowLeft />
          </button>
          <h1 className="mb-5 mt-5 text-2xl font-bold">Verify OTP</h1>
        </div>
        <form onSubmit={handleVerify} className="w-[80%] flex flex-col justify-center items-center">
          <p>A 6-digit code has been sent to</p>
          <p className="font-semibold text-blue-600 mb-4">{email}</p>
          <p className="mb-6">Enter the OTP</p>
          <div className="flex gap-2 md:gap-3 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                disabled={isLoading}
                className="w-12 h-12 md:w-14 md:h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-white transition disabled:opacity-50"
              />
            ))}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="relative overflow-hidden bg-[#15294B] px-30 py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {isLoading ? "Verifying..." : "Verify OTP"}
            </span>
            <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </form>
        <h1>
          Didn't receive the code?
          <a href="/forgotpassword" className="hover:underline mb-10 text-blue-500">
            {" "}Resend OTP
          </a>
        </h1>
      </div>
    </div>
  );
}

export default VerifyForm;