
function IndustryInsightsCards({logo,title,content,skills,salary,jobRoles}) {
  return (
    <div className='flex bg-[#F6F9FE] mt-5 flex-col gap-3 justify-center items-center shadow-lg md:px-15'>
        <div className='flex flex-col mt-2 items-center md:mb-10'>
            <img src={logo} alt="logo" className='h-5 w-5 md:h-8 md:w-8' />
            <h1 className='font-serif font-semibold md:text-2xl text-center'>{title}</h1>
        </div>
        <h1 className="font-serif p-2 text-center md:mb-15">{content}</h1>
        <h1 className="font-serif p-2 text-center md:pb-15"><h1 className="font-serif font-semibold">Top Skills:</h1> {skills}</h1>
        <h1 className="font-serif p-2 text-center md:pb-15"><h1 className="font-serif font-semibold">Freshers Avg. Salary:</h1>{salary}</h1>
        <h1 className="font-serif p-2 text-center"><h1 className="font-serif font-semibold">Top Job Roles:</h1>{jobRoles}</h1>
      
    </div>
  )
}

export default IndustryInsightsCards
