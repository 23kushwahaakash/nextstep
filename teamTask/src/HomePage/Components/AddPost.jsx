import User from "../Images/User.png"
import Video from "../Images/Video.png"
import AddPhoto from "../Images/AddPhoto.png"
import WriteArticle from "../Images/WriteArticle.png"

function AddPost() {
  return (
    <div className="border-b border-black px-5 md:px-[15%]">
      <div className="shadow-xl grid grid-rows-2 mt-5 mb-8 border border-gray-300 rounded-md">
      <div className="flex gap-2 items-center px-5 pt-2">
        <img src={User} alt="profile" className="h-5 md:h-full" />
        <input type="text" placeholder="Start a post..." className="border border-black rounded-md placeholder:text-center md:py-2 md:px-30" />
      </div>
      <div className="flex justify-around ml-5 ">
        <div className="flex gap-1 md:gap-3 items-center">
            <img src={Video} alt="video" className="h-2 md:h-4"/>
            <p className="text-xs md:text-lg">Video</p>
        </div>
        <div className="flex gap-1 items-center">
            <img src={AddPhoto} alt="Add photo" className="h-2 md:h-4"/>
            <p className="text-xs md:text-xl">Photo</p>
        </div>
        <div className="flex gap-1 items-center">
            <img src={WriteArticle} alt="Write aricle" className="h-2 md:h-4"/>
            <p className="text-xs md:text-xl">Write Article</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddPost
