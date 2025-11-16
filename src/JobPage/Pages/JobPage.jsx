import Map from "../Images/Map.png"
import Google from "../Images/Google.png"
import  Spotify from "../Images/Spotify.png"
import Adobe from "../Images/Adobe.png"
import Shopify from "../Images/Shopify.png"
import Coursera from "../Images/Coursera.png"
import HeroImage from "../Images/HeroImage.png"
import MostSearchedJob from "../Images/MostSearchedJob.png"
import Buildings from "../Images/Buildings.png"
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'
import Jobcards from "../Components/Jobcards"
import { Search } from "lucide-react"
import {useState} from 'react'
import I1 from "../Images/I1.png"
import I2 from "../Images/I2.png"
import I3 from "../Images/I3.png"
import I4 from "../Images/I4.png"
import I5 from "../Images/I5.png"
import I6 from "../Images/I6.png"
import I7 from "../Images/I7.png"
import I8 from "../Images/I8.jpg"


function JobPage() {

    const [value, setValue]=useState(50);

  return (
    <div>
        <Header/>
        <div className=" pt-10 md:pt-6 z-0">
            <img src={Map} alt="map" className="relative md:min-h-screen "/>
            <img src={HeroImage} alt="hero image" className="absolute top-0 md:min-h-screen w-full pt-10 md:pt-20" />  
        </div>
        <div className="md:p-5">
            <h1 className="font-serif text-xl p-5 md:pt-5 md:text-4xl">Recent Jobs Available</h1>

            <div className="grid grid-cols-2 md:grid-cols-[25%_75%]  gap-2 px-5">
                <div className="bg-[#F1F5FA] rounded-lg p-2 mb-5">
                    <h1 className="text-lg font-semibold mb-3">Search by Job Title</h1>
                    <div className="bg-white md:flex md:py-2 md:rounded-md gap-2 mb-5">
                        <Search stroke="gray" className="w-4"/>
                        <input type="text" placeholder="Job title or company" className=" placeholder:text-sm" />
                    </div>

                    <h1 className="text-lg font-semibold mb-3">Location</h1>
                    <select name="location" id="location" className="bg-white p-2 rounded-lg pb-5">
                        <option value="Choose city">Choose City</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">New Delhi</option>
                    </select>

                    <h1 className="text-lg font-semibold mb-3 mt-5">Category</h1>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Commerce</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Telecom</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Hotels & Tourism</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Education</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Financial Services</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>

                    <button className="text-white bg-[#15294B] w-full my-2 rounded-lg">Show More</button>

                    <h1 className="text-lg font-semibold mb-3 mt-5">Job Type</h1>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Full Time</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Part Time</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Free Lance</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Seasonal</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Fixed Price</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>

                    <h1 className="text-lg font-semibold mb-3 mt-5">Experience Level</h1>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>No-experience</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Fresher</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Intermediate</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Expert</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    

                    <h1 className="text-lg font-semibold mb-3 mt-5">Date Posted</h1>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>All</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Last Hour</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Last 24 Hours</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Last 7 Days</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                            <input type="checkbox"/>
                            <h1>Last 30 Days</h1>
                        </div>
                        <span className="bg-white p-1 rounded-full">0</span>
                    </div>
                    
                    <h1 className="text-lg font-semibold mb-3 mt-5">Salary</h1>
                    <input 
                    type="range" 
                    min="0" 
                    max="9999"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)} />

                    <div className="flex items-center md:justify-between gap-5">
                        <h1 className="text-xl font-semibold">${value}</h1>
                        <button className="text-white bg-[#15294B] w-full md:w-50 my-2 rounded-lg">Apply</button>
                    </div>

                    <h1 className="text-lg font-semibold mb-3 mt-5">Tags</h1>
                    < div className="flex gap-3 mt-2">
                        <h1 className="bg-[#3096891A] rounded-full">Engineering</h1>
                        <h1 className="bg-[#3096891A] rounded-full">Design</h1>
                    </div>
                    < div className="flex gap-3 mt-2">
                        <h1 className="bg-[#3096891A] rounded-full">UI/UX</h1>
                        <h1 className="bg-[#3096891A] rounded-full">Marketing</h1>
                    </div>
                        
                    < div className="flex gap-3 mt-2 mb-2">
                        <h1 className="bg-[#3096891A] rounded-full">Management</h1>
                        <h1 className="bg-[#3096891A] rounded-full">Soft</h1>
                    </div>
                        <h1 className="bg-[#3096891A] rounded-full">Construction</h1>

                </div>


                <div className="flex gap-5 flex-col">
                    <Jobcards
                    time="10 min ago"
                    logo={Google}
                    title="Google"
                    position="Senior Product Designer"
                    duration="Full time"
                    salary="$40000-$42000"
                    location="New-Delhi"/>

                    <Jobcards
                    time="12 min ago"
                    logo={Spotify}
                    title="Spotify"
                    position="Associate Content Strategist"
                    duration="Part time"
                    salary="$28000-$32000"
                    location="Greater-Noida"/>

                    <Jobcards
                    time="12 min ago"
                    logo={Adobe}
                    title="Adobe"
                    position="UI/UX Designer"
                    duration="Part time"
                    salary="$85000-$115,000"
                    location="Greater Noida"/>

                    <Jobcards
                    time="15 min ago"
                    logo={Shopify}
                    title="Shopify"
                    position="Partner Marketing Manager"
                    duration="Part time"
                    salary="$25000-$82000"
                    location="New-Delhi"/>

                    <Jobcards
                    time="20 min ago"
                    logo={Coursera}
                    title="Coursera"
                    position="University Partnership Associate"
                    duration="Part time"
                    salary="$40000-$42000"
                    location="Lucknow"/>
                </div>

                <div className="relative shadow-lg mb-5 md:w-80">
                        <img src={MostSearchedJob} alt="people" className="w-full h-80" />
                        <div className="absolute inset-0 p-2 flex flex-col">
                            <h2 className="text-white bg-[#15294B] text-center py-1  rounded-md font-semibold mb-3 ">Most Searched Jobs:</h2>
                            <div className="flex-1 space-y-1 overflow-y-auto">
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Graphic Designer
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Photographer
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Front End Developer
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Data Analyst
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Accountant
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Full Stack Developer
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    Senior Lecturer
                                </button>
                                <button className="w-full bg-white text-gray-800 py-1 rounded-md text-sm">
                                    UX Designer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Buildings} alt="buildings" className=" w-full h-80" />
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-col md:justify-center md:items-center p-8 md:mx-auto">
                <h1 className="font-serif text-2xl md:text-4xl md:text-center md:mb-15">Get hired by top companies</h1>
                <div className="grid grid-cols-4 grid-rows-2 gap-5 mt-5 md:w-[50%]">
                    <div className="  shadow-lg rounded-lg md:py-5">
                        <img src={I1} alt="I1" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg  md:py-5">
                        <img src={I2} alt="I2" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg md:py-5">
                        <img src={I3} alt="I3" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg md:py-5">
                        <img src={I4} alt="I4" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg md:py-5">
                        <img src={I5} alt="I5" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg md:py-5">
                        <img src={I6} alt="I6" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg md:py-5">
                        <img src={I7} alt="I7" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                    <div className="shadow-lg rounded-lg md:py-5">
                        <img src={I8} alt="I8" className="p-2 md:h-20 md:mx-auto" />
                    </div>
                </div>
            </div>

        
        <Footer/>
      
    </div>
  )
}

export default JobPage
