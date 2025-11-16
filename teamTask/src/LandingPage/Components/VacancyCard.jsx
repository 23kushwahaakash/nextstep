import Save from "../Images/Save.png"

function VacancyCard({logo,name,location,posted,position,time="Full Time",domain,model,description}) {
  return (
    <div className='flex flex-col border border-gray-300 rounded-lg p-5 w-full'>
        <div className='flex justify-between mb-5'>
            <div className="flex gap-2">
                <img src={logo} alt="logo" />
                <div className='flex flex-col gap-1'>
                    <h1 className="font-serif font-semibold">{name}</h1>
                    <h1 className="font-serif">{location}</h1>
                    <h1 className="text-xs">{posted}</h1>
                </div>
            </div>
            <img src={Save} alt="saved" className="w-6 h-6"/>
        </div>
        <h1 className="font-serif font-semibold mb-3">{position}</h1>
        <div className="flex gap-2 mb-3">
            <span className="bg-[#F1F5FA] px-2">{time}</span>
            <span className="bg-[#F1F5FA] px-2">{domain}</span>
            <span className="bg-[#F1F5FA] px-2">{model}</span>
        </div>
        <p className="mb-5">{description}</p>
        <div className="flex gap-2">
            <button className="bg-[#15294B] text-white py-1 px-[15%] rounded-lg hover:text-[#15294B] hover:bg-gray-300">Apply</button>
            <button className="border border-[#20C6B1] py-1 px-[10%] rounded-md">Read More</button>
        </div>
      
    </div>
  )
}

export default VacancyCard
