import { User } from "lucide-react"
import Like from "../Images/Like.png"
import Comment from "../Images/Comment.png"
import Share from "../Images/Share.png"
import Follow from "../Images/Follow.png"
import Satya from "../Images/Satya.png"
import World from "../Images/world.png"

function General() {
  return (
    <div className='w-72 md:w-300'>
      <div className='pt-5 flex justify-between'>
          <button
           type="submit" 
           className="relative overflow-hidden bg-[#15294B] pr-3 pl-3 py-2 mb-3 text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group flex "
          >
          <span className="relative z-10 text-sm md:text-lg md:px-20">Companies</span>
          <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
          <a href="#" className='text-blue-400 text-sm md:text-lg hover:underline'>View all</a>
        </div>
        <div className='flex flex-col border border-gray-700 rounded-lg mb-5 p-2 md:p-5 w-[80%] mx-auto'>
                <div className="flex border-b border-gray-300 mb-3 ">
                    <div className="flex">
                        <div className="rounded-full bg-gray-500 h-10 w-10 flex justify-center items-center mr-3 flex-shrink-0">
                        <User stroke="white"/>
                    </div>
                    <div className="pb-3 gap-2">
                        <h1 className="font-bold">CSI Team-3</h1>
                        <div className="flex gap-1"><h1 className="text-xs text-gray-500">Technology Forecaster, Speaker,Author</h1></div>
                        <span className="flex gap-2 items-center text-gray-500 text-xs"><h1>14m .</h1><img src={World} alt="world" className="h-3" /></span>
                    </div>
                    </div>
                    <div className="md:pl-160">
                        <img src={Follow} alt="follow" />
                    </div>
                </div>
                <div>
                    <h1 className="font-serif mb-1 font-semibold">What does Satya Nadella really look for in a new hire? You might be surprised.</h1>
                        <h1 className="pb-2">Mr. Nadella made waves last month for his comments on AI's role in productivity, but what has he been consistent on for a decade?<a className="text-blue-700 cursor-pointer">more..</a></h1>
                    <img src={Satya} alt="Satya" />
                    <div className="flex justify-between pt-2">
                        <div className="flex gap-3">
                            <img src={Like} alt="like" className="h-5" />
                            <img src={Comment} alt="comment" className="h-5" />
                        </div>
                        <img src={Share} alt="share" className="h-5"/>
                    </div>
                </div>
                      
            </div>
    </div>
  )
}

export default General
