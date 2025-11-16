import Mobile from "../Images/Mobile.png"

function TestimonialsSection() {
  return (
    <div className=' bg-[#F1F5FA] flex flex-col justify-center items-center pb-15 '>
      <h1 className='text-4xl font-serif pt-15 pb-15'>Testimonials</h1>
      <div className="flex justify-between px-15 gap-10">
        <div className="w-[50%]">
            <h1 className="text-2xl font-serif pb-8">What our clients are saying</h1>
            <p className="pb-8">"I had the privilege of using NextStep to search for employment, and it exceeded my expectations. The platform's user-friendly
                features and the vast array of job listings made my job search a success. I endorse job hunt wholeheartedly."</p>
            <h1 className="text-xl font-serif">Julie Roy</h1>
            <h1>Product Manager</h1>
        </div>
        <div>
            <img src={Mobile} alt="mobile" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
