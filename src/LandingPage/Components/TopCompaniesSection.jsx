import Instagram from "../Images/Instagram.png"
import Tesla from "../Images/Tesla.png"
import MacD from "../Images/MacD.png"
import Apple from "../Images/Apple2.png"
import CompanyCards from "./CompanyCards"

function TopCompaniesSection() {
  return (
    <div className='bg-[#F1F5FA] w-full flex flex-col min-h-screen justify-center items-center mt-8 shadow-lg '>
        <h1 className='font-serif text-5xl mb-5 pt-8'>Top Companies</h1>
        <h1>Discover some of the world's most innovative and</h1>
        <h1 className="pb-12">leading companies offering exciting career opportunities and growth </h1>
        <div className="grid grid-cols-4 gap-5 w-full px-15">
            <CompanyCards
            logo={Instagram}
            title="Instagram"
            content="Join the creative force behind the world's most loved social media platform. Work with passionate team shaping the future of digital storytelling..."
            jobOpen="8 open jobs"/>

            <CompanyCards
            logo={Tesla}
            title="Tesla"
            content="Be a part of the revolution in sustainable technology. Tesla offers challenging roles for those driven to make a global impact through innovation"
            jobOpen="18 open jobs"/>

            <CompanyCards
            logo={MacD}
            title="McDonald's"
            content="Step into a fast-paced environment where teamwork and customer satisfaction define success. Build a rewarding career with one of the most recognized brands world"
            jobOpen="12 open jobs"/>

            <CompanyCards
            logo={Apple}
            title="Apple"
            content="Innovative with purpose at Apple - where creativity meets cutting-edge technology. Help design the future by contributing to products that inspire millions."
            jobOpen="9 open jobs"/>

        </div>
      
    </div>
  )
}

export default TopCompaniesSection
