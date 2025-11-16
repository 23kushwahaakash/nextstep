import GoogleLogo from "../Images/GoogleLogo.png"
import GoogleOffice from "../Images/GoogleOffice.png"
import MicrosoftLogo from "../Images/MicrosoftLogo.png"
import MicrosoftOffice from "../Images/MicrosoftOffice.png" 
import CompanyCard from './CompanyCard'

function Companies() {
  return (
    <div>
      < div className='w-72 md:w-300'>
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

        <div className="md:grid grid-cols-2 gap-5">
          <CompanyCard
          logo={GoogleLogo}
          title="Google"
          followers="45,556,204"
          time="14m"
          tagline="Exciting carrer openings now live! Join our growing global team. Contribute to the one of the largest projects."
          image={GoogleOffice}/>

         <CompanyCard
          logo={MicrosoftLogo}
          title="Microsoft"
          followers="66,596,754"
          time="7m"
          tagline="Exciting career openings now live! Be part of Microsoft's mission to empower every person and organization"
          image={MicrosoftOffice}/>
        </div>

      </div>
    </div>
  )
}

export default Companies
