import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import NextStep from "../Images/NextStep.png";
import Humburger from "../Components/Humburger";
import SmallerTabs from "../Components/SmallerTabs";
import ProfilePopUp from "../Components/ProfilePopUp"
import { Search, Mic, Home, MessageCircle, Briefcase, Bell, User, ChevronDown } from "lucide-react";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); 

  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#F5F8FD] py-3 px-6 flex items-center justify-between">

      <Humburger/>
      
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <img src={NextStep} alt="NextStep logo" className="h-8" />
          <h1 className="font-serif text-xl">NextStep</h1>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 w-full max-w-lg mx-6">
          <Search className="w-5 h-5 text-gray-600" />
          <input 
          type="text" 
          placeholder="Search" 
          className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
          />
          <div className="border-l h-6 border-gray-300"></div>
          <Mic className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      <div className="flex items-center gap-3 hidden md:flex">
         <button onClick={()=>navigate("/home")} ><SmallerTabs icon={Home} title="Home" /></button>
        <button onClick={()=>navigate("/chats")} ><SmallerTabs icon={MessageCircle} title="Chats" badge="7" /></button>
        <button onClick={()=>navigate("/jobs")}><SmallerTabs icon={Briefcase} title="Jobs" /></button>
      </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs p-1 rounded-full">
              0
            </span>
          </div>

          <div>
            <select name="country" id="country">
              <option value="india">IN</option>
            </select>
          </div>
          
          
          <div className="relative">
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