import NextStep from "../Images/logo.svg"
import Facebook from "../Images/facebook.svg"
import Apple from "../Images/apple.svg"
import Google from "../Images/google.svg"


function Footer() {
    return (
      <div className="bg-gradient-to-b from-slate-500 to-gray-900 text-white w-full">
          <div className="px-6 py-10 md:m-20 border-b border-white/20 grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="flex flex-col items-start">
                  <div className="flex gap-2 items-center mb-6">
                      <img src={NextStep} alt="NextStep logo" />
                      <h1 className="font-serif text-xl">NextStep</h1>
                  </div>
                  <p className="text-sm">Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
              </div>
  
              <div className="hidden md:flex flex-col gap-3">
                  <h1 className="text-xl font-semibold"><a href="/jobrecruiter/aboutpage" className="hover:underline cursor-pointer">About</a></h1>
                  <p>Companies</p><p>Pricing</p><p>Terms</p><p>Advice</p><p>Privacy Policy</p>
              </div>
  
              <div className="hidden md:flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">Resources</h1>
                  <p>Help Docs</p><p>Guide</p><p>Updates</p><p>Contact Us</p>
              </div>
  
              {/* Mobile-only view for links */}
              <div className="grid grid-cols-2 md:hidden gap-5">
                  <div className="flex flex-col gap-2">
                      <h1 className="font-bold">About</h1>
                      <p className="text-xs">Companies</p><p className="text-xs">Pricing</p>
                  </div>
                  <div className="flex flex-col gap-2">
                      <h1 className="font-bold">Resources</h1>
                      <p className="text-xs">Help Docs</p><p className="text-xs">Guide</p>
                  </div>
              </div>
  
              <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">Get job notifications</h1>
                  <p className="text-sm">The latest job news, articles, sent to your inbox weekly.</p>
                  <div className="flex flex-col gap-2 w-full">
                      <input type="email" placeholder="Email Address" className="bg-white text-gray-800 p-2 md:p-3 outline-none w-full"/>
                      <button className="bg-[#15294B] p-2 md:p-3 text-lg font-bold">Subscribe</button>
                  </div>
              </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-6 gap-4">
              <h1 className="text-xs">2025 @ NextStep. All rights reserved.</h1>
              <div className="flex gap-5">
                  <img src={Facebook} alt="facebook" className="w-6 h-6 md:w-8 md:h-8" />
                  <img src={Apple} alt="apple" className="w-6 h-6 md:w-8 md:h-8"/>
                  <img src={Google} alt="google" className="w-6 h-6 md:w-8 md:h-8" />
              </div>
          </div>
      </div>
    )
  }

export default Footer
