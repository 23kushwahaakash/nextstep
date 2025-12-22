import Role from "../Components/Role"
import NextStep from "../Images/NextStep.png"
import ManThinking from "../Images/ManThinking.png"
import Footer from "../Components/Footer"
import GoogleFull from "../Images/Google.png"
import Accenture from "../Images/Accenture.png"
import Microsoft from "../Images/Microsoft.png"
import Amazon from "../Images/Amazon.png"
import Infosys from "../Images/Infosys.png"
import TwoMenSitting from "../Images/TwoMenSitting.png"

function RoleSelectionPage() {
  return (
    <div>
        <div className='w-full bg-[#F1F5FA] flex gap-2 justify-center items-center'>
            <img src={NextStep} alt="NextStep logo" className="pt-3 pb-3" />
            <h1 className="text-xl  font-serif">NextStep</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-rows-2  gap-x-20 mt-20">
            <div className="relative hidden md:block md:w-[400px] md:h-[400px] mx-auto">
                <img 
                src={ManThinking}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48"
                />
               <div className="absolute inset-0 animate-spin-slow">
                <img src={GoogleFull} className="absolute top-10 left-1/2 -translate-x-1/2 w-24 animate-float" />
                <img src={Accenture} className="absolute top-20 left-20 w-24 animate-floatshow"/>
                <img src={Microsoft} className="absolute right-10 top-1/2 -translate-y-1/2 w-24 animate-driftSlow"/>
                <img src={Amazon} className="absolute left-10 top-1/2 -translate-y-1/2 w-24 animate-drift"/>
                <img src={Infosys} alt="infosys"className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 animate-floatSlow"/>
               </div>
            </div>

            <div>
                <Role
                  tagline1="Become a Candidate"
                  tagline2="Connect with recruiters and take the next step in your career"
                  button="Apply Now"
                  role="Jobseeker"
                  navigateTo="/jobseeker"
                />
            </div>
            <div>
                <Role
                  tagline1="Become an Employer"
                  tagline2="Hire the best talent for your team. Post jobs, manage applications, and grow your company effortlessly."
                  button="Start Hiring"
                  role="JobsGiver"
                  navigateTo="/jobrecruiter"
                />
            </div>
            <div className="hidden md:block">
                <img src={TwoMenSitting} alt="two men"/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RoleSelectionPage
