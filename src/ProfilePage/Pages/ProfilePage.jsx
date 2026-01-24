import Square from "../Images/Square.png"
import Upload from "../Images/Upload.png"
import Check from "../../SubmitPage/Check.png"
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { handleResumeUpload } from "../resumeUpload"
import toast from "react-hot-toast"
import { JOBSEEKER_API_ENDPOINT } from "../../APIs/Data"
import axios from "axios"
import { useDispatch } from "react-redux";
import NextStep from "../../Authorisation/Images/logo.png"
import {setbio, setexperienceinfo, setfirstname, sethighesteduinfo, setid,setlanguagechosen, setlastname, setphonenum, setresume, setskills, setuserid} from "../../Redux/profileSlice"

function ProfilePage() {
  const accessToken = localStorage.getItem("accessToken");

  const [uploaded, setUploaded]=useState(false);
  const[loading, setLoading] = useState(false);
  
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [phonenumber, setPhoneNumber] = useState("");

  const [chooselanguage, setChooseLanguage] = useState("");

  const [bio, setBio] = useState("")
  
  const [education, setEducation] = useState({
    degree:"",
    institution:"",
    year:""
  })

  const [skills, setSkills] = useState("")

  const [experience, setExperience] = useState({
    company:"",
    role:"",
    duration:"",
    description:""
  })

  const ResumeUpload = async (e) => {
      const success = await handleResumeUpload(e);
      if (success) {
        setUploaded(true);
        toast.success("Resume uploaded successfully!");
      }
      else{
        toast.error("Resume not uploaded!");
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
    firstName,
    lastName,
    phonenumber,
    chooselanguage,
    bio,
    education:`${education.degree}, ${education.institution}, ${education.year}` ,
    skills: skills.split(",").map(s => s.trim()),
    experience:`${experience.company}, ${experience.role}, ${experience.duration}, ${experience.description}`
  };
  try{
    const res = await axios.post(
      `${JOBSEEKER_API_ENDPOINT}/profilemanage`,
      userData,{
        headers:{
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials:true,
      }
    );
    console.log(res.data); 

    dispatch(setbio(res.data.profile.bio));
    dispatch(setlanguagechosen(res.data.profile.chooselanguage));
    dispatch(sethighesteduinfo(res.data.profile.education));
    dispatch(setexperienceinfo(res.data.profile.experience));
    dispatch(setfirstname(res.data.profile.firstName));
    dispatch(setid(res.data.profile._id));
    dispatch(setlastname(res.data.profile.lastName));
    dispatch(setphonenum(res.data.profile.phonenumber));
    dispatch(setresume(res.data.profile.resume));
    dispatch(setskills(res.data.profile.skills));
    dispatch(setuserid(res.data.profile.userId));



    toast.success("Profile submitted successfully!")
    navigate("/jobseeker/profile/submit");
  }catch(error){
    toast.error(error.message);
  }finally{
    setLoading(false);
  }
  }
  

  return (
    <div className='bg-[#F6F9FE]'>
      {loading && (
              <div className="fixed inset-0 z-50 bg-white/80 flex flex-col items-center justify-center">
                {/* Logo */}
                <img
                src={NextStep}
                alt="Loading"
                className="w-20 mb-6"
                />
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-blue-600 font-bold text-m">
                  Submitting your profile...
                </p>
              </div>
            )}
            <Header/>
      <div className="relative min-h-screen overflow-hidden">
        <img src={Square} alt="square" className=" absolute pt-10  -ml-50 md:-ml-120"/>
        <img src={Square} alt="square " className="absolute md:translate-x-280 translate-x-50 pt-30" />  
        
        {/* Resume Uplaod Section */}
        <div className="mx-auto w-[70%] md:w-[20%] mt-20 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6">
          <label 
          htmlFor="resumeUpload"
          className="cursor-pointer">
            {uploaded ? (<img
            src={Check}
            alt="Uploaded"
            className="w-16 h-16 mb-4"
            />) : (
               <img 
                src={Upload} 
                alt="Upload" 
                className="w-16 h-16 mb-4"
              />
            )}
           
          <input 
          id="resumeUpload"
          type="file"
          accept=".pdf, .doc, .docx"
          hidden
          onChange={ResumeUpload} />
          </label>

          <p className="text-green-600 font-medium text-lg">
            {uploaded ? "Uploaded Successfully" : "Browse photo or upload here"}
          </p>

          <p className="text-gray-500 text-sm mt-2 leading-5">
            {uploaded ? "" : (<>A photo larger than 400 pixels <br />
            work best. Max photo size 5 MB.</>)}
          </p>
        </div>

        {/* Personal Details Section */}
        <div className="w-full px-5 md:px-25 mt-10">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
            </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                </select>
                <input
                  type="text"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="ml-2 w-full outline-none py-2"
                />
              </div>
            </div>

            <div >
              <label className="block text-sm font-medium mb-1">
                Choose Language<span className="text-red-500">*</span>
              </label>
              <select 
              className="w-full border cursor-pointer border-gray-300 rounded-md px-3 py-2 outline-none"
              onChange={(e) => setChooseLanguage(e.target.value)}
              name="chooselanguage"
              value={chooselanguage}
              >
                <option >Select</option>
                <option value="English"> English</option>
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
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Highest Qualification <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => setEducation({...education,degree:e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-3 outline-none"
        />
        <input
          type="text"
          placeholder="Institution"
          value={education.institution}
          onChange={(e) => setEducation({...education, institution:e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-3 outline-none"
        />
        <input
          type="text"
          placeholder="Year"
          value={education.year}
          onChange={(e => setEducation({...education, year:e.target.value}))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-3 outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Skills <span className="text-red-500">*</span>
        </label>

        <input
          rows="5"
          placeholder="React, Node, MongoDB ..."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 outline-none"
        ></input>
      </div>
    
      <label className="block text-sm font-medium mb-2">
        Add Experience <span className="text-red-500">*</span>
      </label>

      <input
        placeholder="Company"
        value={experience.company}
        onChange={(e) => setExperience({...experience,company:e.target.value})}
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 text-gray-600 outline-none"
      ></input>
      <input
        placeholder="Role"
        value={experience.role}
        onChange={(e) => setExperience({...experience,role:e.target.value})}
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 text-gray-600 outline-none"
      ></input>
      <input
        placeholder="Duration"
        value={experience.duration}
        onChange={(e) => setExperience({...experience,duration:e.target.value})}
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 text-gray-600 outline-none"
      ></input>
      <input
        placeholder="Description"
        value={experience.description}
        onChange={(e) => setExperience({...experience,description:e.target.value})}
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-600 outline-none"
      ></input>

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
          Yes, NextStep can contact me directly about specific future job opportunities.
        </p>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button 
        className="bg-[#0F2B46] text-white px-10 py-3 rounded-md font-medium hover:opacity-90 transition"
        onClick={handleSubmit}>
          Submit Application
        </button>
      </div>

     </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage
