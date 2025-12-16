import NextStep from "../Images/logo.svg"
import Facebook from "../Images/facebook.svg"
import Apple from "../Images/apple.svg"
import Google from "../Images/google.svg"
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-500 to-gray-900 text-white grid">
        <div className="md:m-20 m-10 border-b pb-15 grid md:grid-cols-4">
            <div className=" w-[80%] grid-col-1 mb-10">
                <div className="flex flex-col items-start">
                    <div className="flex gap-2 justify-center items-center mb-10">
                        <img src={NextStep} alt="NextStep logo" />
                        <h1 className="font-serif">NextStep</h1>
                    </div>
                    <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                </div>
            </div>
            <div className="hidden md:block flex flex-col gap-3 grid-col-2">
                <h1 className="text-xl font-semibold "><Link to="/jobrecruiter/aboutpage" className="hover:underline cursor-pointer">About</Link></h1>
                <h1>Companies</h1>
                <h1>Pricing</h1>
                <h1>Terms</h1>
                <h1>Advice</h1>
                <h1>Privacy Policy</h1>
            </div>
            <div className="hidden md:block flex flex-col gap-3 grid-col-3">
                <h1 className="text-xl font-semibold">Resources</h1>
                <h1>Help Docs</h1>
                <h1>Guide</h1>
                <h1>Updates</h1>
                <h1>Contact Us</h1>
            </div>
            <div className="block md:hidden grid grid-cols-2 mb-8">
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-semibold">About</h1>
                    <h1>Companies</h1>
                    <h1>Pricing</h1>
                    <h1>Terms</h1>
                    <h1>Advice</h1>
                    <h1>Privacy Policy</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-semibold">Resources</h1>
                    <h1>Help Docs</h1>
                    <h1>Guide</h1>
                    <h1>Updates</h1>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="flex flex-col gap-3 grid-col-4">
                <h1 className="text-xl font-semibold">Get job notifications</h1>
                <p>The latest job news, articles, sent to your inbox weekly.</p>
                <div className="flex flex-col gap-2">
                    <input type="email" placeholder="Email Address" className="bg-white text-gray-800 md:p-3 p-1"/>
                    <button className="bg-[#15294B] md:p-3 p-1 text-lg">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:mx-20">
            <h1 className="text-xs">2025 @ NextStep. All rights reserved.</h1>
            <div className="flex md:gap-5 gap-2 pb-5">
                <img src={Facebook} alt="facebook" className="md:w-10 md:h-10 w-5 h-5" />
                <img src={Apple} alt="apple" className="md:w-10 md:h-10 w-5 h-5"/>
                <img src={Google} alt="google" className="md:w-10 md:h-10 w-5 h-5" />
            </div>
        </div>
    </div>

    
  )
}

export default Footer
