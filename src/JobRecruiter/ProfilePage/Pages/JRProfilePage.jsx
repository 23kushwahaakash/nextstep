import Square from "../Images/Square.png"
import Upload from "../Images/Upload.png"
import UploadIcon from "../Images/UploadIcon.png"
import Header from '../../../LandingPage/Components/Header'
import Footer from '../../../LandingPage/Components/Footer'
import { useNavigate } from "react-router-dom"

function JRProfilePage() {
  const navigate=useNavigate();
  return (
    <div className='bg-[#F6F9FE]'>
      <Header/>
      <div className="relative min-h-screen overflow-hidden">
        <img src={Square} alt="square" className=" absolute pt-10  -ml-50 md:-ml-120"/>
        <img src={Square} alt="square " className="absolute md:translate-x-280 translate-x-50 pt-30" />  
        <div className="mx-auto w-[70%] md:w-[20%] mt-20 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6">
          
          <img 
            src={Upload} 
            alt="Upload" 
            className="w-16 h-16 mb-4"
          />

          <p className="text-green-600 font-medium text-lg">
            Browse photo or drop here
          </p>

          <p className="text-gray-500 text-sm mt-2 leading-5">
            A photo larger than 400 pixels <br />
            work best. Max photo size 5 MB.
          </p>
    
        </div>
        <div className="w-full px-5 md:px-25 mt-10">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">            
          <div>
              <label className="block text-sm font-medium mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Job Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
                />
              </div> 
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-2">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="IN"
                    className="w-5 h-4"
                  />
                 <select className="ml-2 outline-none">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+86</option>
                  <option>+33</option>
                  <option>+49</option>
                  <option>+52</option>
                  <option>+44</option>
                </select>
                <input
                  type="text"
                  className="ml-2 w-full outline-none py-2"
                />
              </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
                />
              </div> 
            <div >
              <label className="block text-sm font-medium mb-1">
                Choose Language<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border cursor-pointer border-gray-300 rounded-md px-3 py-2 outline-none"
              >
              <option >Select</option>
              <option value="English-UK"> English-UK</option>
              <option value="English-US"> English-US</option>
              <option value="Hindi">HIndi</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              Bio<span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            ></textarea>
          </div>
          <div>
        <label className="block text-sm font-medium mb-2">
          LinkedIn Profile URL 
        </label>

        <div className="w-full border border-gray-300 rounded-md px-4 py-4 flex items-center gap-2 text-gray-500">
          <img
            src={UploadIcon}
            alt="PDF"
            className="w-5 h-5 opacity-70"
          />
          <span>LinkedIn.Com/in/YourProfile</span>
        </div>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-3 mt-3 outline-none"
        />
      </div>

      <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              Specializations
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            >
            </textarea>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              About Your Company<span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            ></textarea>
          </div>

      <div className="flex items-start gap-2 mt-6">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 cursor-pointer"
        />
        <p className="text-sm text-gray-700 leading-5">
          By submitting this application, I agree that I have read the Privacy Policy and confirm that
          NextStep store my personal details to be able to process my job application.
        </p>
      </div>

      <div className="flex items-start gap-2 mt-4">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 cursor-pointer"
        />
        <p className="text-sm text-gray-700 leading-5">
          Make my profile visible to candidates and other recruiters.
        </p>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button 
        className="bg-[#0F2B46] text-white px-10 py-3 rounded-md font-medium hover:opacity-90 transition"
        onClick={()=>navigate("/jobrecruiter/submitpage")}>
          Submit Application
        </button>
      </div>

     </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default JRProfilePage
