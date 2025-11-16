import Flipkart from "../Images/Flipkart.png"
import Zomato from "../Images/Zomato.png"
import TCS from "../Images/TCS.png"
import Microsoft from "../Images/Microsoft.png"
import VacancyCard from './VacancyCard'

function FeaturedJobsSection() {
  return (
    <div className='mt-15 flex flex-col justify-center items-center w-full px-60 pb-15'>
        <h1 className='text-4xl font-serif mb-5'>Featured Jobs</h1>
        <h1 className='text-xl mb-10'>Freshly released job applications</h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-5 pb-15'>
            <VacancyCard
            logo={Flipkart}
            name="Flipkart"
            location="Bengaluru, Karnataka"
            posted="Posted: 5 Days Ago"
            position="Senior Product Designer"
            domain="Design"
            model="Hybrid"
            description="Join the core e-commerce team to design and iterate on new shopping features that impact millions of users."/>

            <VacancyCard
            logo={Zomato}
            name="Zomato"
            location="Gurgaon, Haryana"
            posted="Posted: 2 Days Ago"
            position="Software Engineer (Backend)"
            domain="Engineering"
            model="On-Site"
            description="We are looking for a backend engineer to build and scale the APIs that power our food delivery logistics."/>

            <VacancyCard
            logo={TCS}
            name="Tata Consultancy Services(TCS)"
            location="Mumbai, Maharashtra"
            posted="Posted: 2 Days Ago"
            position="Buiness Analyst"
            domain="Consulting"
            model="On-Site"
            description="Work with our international banking clients to gather requirements and translate them into techinal specifications."/>

            <VacancyCard
            logo={Microsoft}
            name="Microsoft"
            location="Hyderabad, Telangana"
            posted="Posted: Today"
            position="Data Scientist"
            domain="Data Science"
            model="On-Site"
            description="The Azure team is seeking a data scientist to develop machine learning models for resource optimization and forecasting."/>
        </div>
        <button className="bg-[#15294B] text-white hover:bg-gray-300 hover:text-[#15294B] py-[2%] px-[10%] rounded-sm">Find More Jobs</button>
      
    </div>
  )
}

export default FeaturedJobsSection
