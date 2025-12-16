import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import NextStep from "../Images/logo.svg";
import Humburger from "./Humburger";
import SmallerTabs from "./SmallerTabs";
import ProfilePopUp from "./ProfilePopUp"
import { Search, Mic, Home, MessageCircle, Bell, User, ChevronDown } from "lucide-react";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); 

  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#F5F8FD]  py-1 md:py-3 px-2 md:px-6 flex items-center justify-between">

      
      
      <div className="flex gap-5">
        <div className="flex ">
          <Humburger/>
        
          <div className="flex items-center gap-1">
            <img src={NextStep} alt="NextStep logo" className="h-4 md:h-8" />
            <h1 className="font-serif text-md md:text-2xl">NextStep</h1>
          </div>
        </div>

        <div className="flex items-center md:gap-3 bg-white border border-gray-300 rounded-full  md:px-4 py-1 md:py-2  md:w-full max-w-lg md:mx-6">
          <Search className="h-3 md:h-5 text-gray-600" />
          <input 
          type="text" 
          placeholder="Search" 
          className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 placeholder:text-sm"
          />
          <div className="border-l h-6 border-gray-500"></div>
          <Mic className="h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      <div className=" md:items-center gap-3 hidden md:flex">
         <button onClick={()=>navigate("/jobrecruiter/home")} ><SmallerTabs icon={Home} title="Home" /></button>
        <button onClick={()=>navigate("")} ><SmallerTabs icon={MessageCircle} title="Chats" badge="7" /></button>
      </div>

        <div className="flex items-center gap-5">
          <div className="relative hidden md:flex">
            <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs p-1 rounded-full">
              0
            </span>
          </div>

          <div className="hidden md:flex">
            <select name="country" id="country">
              <option value="india">IN</option>
            </select>
          </div>
          
          
          <div className="relative hidden md:flex">
            <button 
              className="bg-[#0A2A5E] p-2 rounded-full cursor-pointer" 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <User className="text-white w-6 h-6" />
            </button>
            
            {isProfileOpen && (
              <ProfilePopUp onClose={() => setIsProfileOpen(false)} />
            )}
          </div>
          
        </div>

    </div>
  );
}

export default Header;