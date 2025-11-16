import { useNavigate } from "react-router-dom";


function Role({tagline1,tagline2,button,navigateTo}) {
    const navigate = useNavigate(); 
  return (
    <div className='bg-[#F1F5FA] rounded-2xl md:w-[85%] flex flex-col justify-center items-center mx-10 mb-20 shadow-xl'>
        <div className="flex flex-col justify-center items-center w-[55%] mt-5 md:mt-30 mb-5 md:mb-30">
            <h1 className='text-4xl text-[#15294B] font-serif mb-5'>{tagline1}</h1>
            <h1 className="mb-5">{tagline2}</h1>
            <button 
               type="submit" 
               onClick={() => navigate(navigateTo)}
               className="relative overflow-hidden bg-[#15294B] px-25 py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
            >
            <span className="relative z-10">{button}</span>
            <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </button>
        </div>
    </div>
  )
}

export default Role