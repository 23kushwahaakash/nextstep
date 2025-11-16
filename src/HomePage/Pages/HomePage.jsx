
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'
import AddPost from '../Components/AddPost'
import Companies from '../Components/Companies'
import General from '../Components/General'
import Insight1  from "../Images/Insight1.png"
import Insight2  from "../Images/Insight2.png"
import Insight3  from "../Images/Insight3.png"
import Insight4  from "../Images/Insight4.png"
import IndustryInsightsCards from '../Components/IndustryInsightsCards'

function HomePage() {
  return (
    <div className='bg-[#F1F5FA]'>
      <Header/>
      <div className='bg-white w-[90%] md:w-[95%] shadow-lg pt-[12%] md:pt-[6%] mx-auto flex flex-col justify-center items-center'>
          <AddPost className="pb-5"></AddPost>
          <Companies/>
          <General/>
          <div className='p-5'>
            <h1 className='font-serif text-xl md:text-3xl '>Industry Insights</h1>
            <h1 className='text-xl'>Get real-time updates on growing industries, trending job roles, and the skills top employers want in 2025</h1>
            <div className='grid md:grid-cols-4 md:gap-10 md:mt-10 md:mb-15'>

              <IndustryInsightsCards
              logo={Insight1}
              title="Technology & IT"
              content="India's tech sector is expanding fast - AI, Cloud, and Cybersecurity roles up by 40% this year"
              skills="Python, Javascript, Data Analytics, Cloud Computing"
              salary="$ 4-10 USD"
              jobRoles={<ul className='list-disc list-inside md:mb-10'>
                <li>Full Stack Developer</li>
                <li>Data Scientist</li>
                <li>Cloud Solution Architect</li>
                <li>Cybersecurity Analyst</li>
                <li>AI/ML Engineer</li>
              </ul>}/>

              <IndustryInsightsCards 
              logo={Insight2}
              title="Business, Finance & Marketing"
              content="Strong demand for digital marketers, Data Analysts, and Finance Associates"
              skills="Excel, Google, Analytics, SEO, Financial Modelling"
              salary="$ 8-10 USD"
              jobRoles={<ul className='list-disc list-inside'>
                <li>Digital Marketer</li>
                <li>Business Analyst</li>
                <li>Financial Analyst</li>
                <li>SEo/SEm Speciallist</li>
                <li>Content Strategist</li>
              </ul>}/>

              <IndustryInsightsCards 
              logo={Insight3}
              title="Engineering & Manufacturing"
              content="Opportunities rising in Automation, EVs and Sustainable Manufacturing"
              skills="CAD, PLC Programming, Quality Control Robotics"
              salary="$ 3-7 USD"
              jobRoles={<ul className='list-disc list-inside'>
                <li>Automation Engineer</li>
                <li>Mechanical Design Engineer</li>
                <li>Quality Assurance Manager</li>
                <li>Supply Chain Analyst</li>
                <li>IoT Engineer</li>
              </ul>}/>

              <IndustryInsightsCards 
              logo={Insight4}
              title="Design & Creative Fields"
              content="Startups and agencies are hiring UI/UX Designers, Graphic Artists and Content Creators"
              skills="Figma, Canva, Adobe Suite, User Research"
              salary="$ 3-6 USD"
              jobRoles={<ul className='list-disc list-inside'>
                <li>Product Designer</li>
                <li>UI/UX Designer</li>
                <li>Social Media Manager</li>
                <li>Animator</li>
                <li>Brand Strategist</li>
              </ul>}/>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
