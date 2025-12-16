import World from "../Images/world.png"
import Like from "../Images/Like.png"
import Share from "../Images/Share.png"
import Download from "../Images/Download.png"
import Comment from "../Images/Comment.png"

function CompanyCards({logo,title,followers,time,tagline,image}) {
  return (
    <div className='border border-gray-700 rounded-lg mb-5 p-2 bg-white'>
        <div className="flex justify-between border-b border-gray-300 mb-3 pb-2">
            <div className="flex">
                <img src={logo} alt="logo" className='h-10 m-3'/>
                <div>
                    <h1 className="font-bold">{title}</h1>
                    <div className="flex gap-1">
                        <h1 className="text-xs text-gray-500">{followers}</h1>
                        <h1 className="text-xs text-gray-500">followers</h1>
                    </div>
                    <span className="flex gap-2 items-center text-gray-500 text-xs">
                        <h1>{time} .</h1>
                        <img src={World} alt="world" className="h-3" />
                    </span>
                </div>
            </div>
            <h1 className="text-4xl font-semibold pr-2">...</h1>
        </div>
        <div>
            <h1 className="font-serif mb-1 px-1">"{tagline}"</h1>
            <img src={image} alt="office" className="w-full h-auto rounded-sm" />
            <div className="flex justify-between pt-2 px-1">
                <div className="flex gap-3">
                    <img src={Like} alt="like" className="h-5" />
                    <img src={Comment} alt="comment" className="h-5" />
                    <img src={Download} alt="download" className="h-5" />
                </div>
                <img src={Share} alt="share" className="h-5"/>
            </div>
        </div>
    </div>
  )
}

export default CompanyCards;