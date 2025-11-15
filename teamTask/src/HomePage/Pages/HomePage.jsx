
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'
import AddPost from '../Components/AddPost'
import Companies from '../Components/Companies'

function HomePage() {
  return (
    <div className='bg-[#F1F5FA]'>
      <Header/>
      <div className='bg-white w-[90%] md:w-[95%] shadow-lg pt-[12%] md:pt-[6%] mx-auto flex flex-col justify-center items-center'>
          <AddPost className="pb-5"></AddPost>
          <Companies></Companies>
      </div>
      
      <Footer/>
    </div>
  )
}

export default HomePage
