import {Search} from 'lucide-react'

function HeroSectionButton() {
  return (
    <div className='bg-white rounded-xl flex mt-10 drop-shadow-lg'>
      <input type="text" placeholder='Job Title or Company' className='border-r border-gray-300 p-5' />
      <select name="location" id="location" className='border-r border-gray-300 p-5'>
        <option value="">Select Location</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="New Delhi">New Delhi</option>
      </select>
      <select name="category" id="category" className='p-5'>
        <option value="">Select Category</option>
        <option value="Frontend Dev">Frontend Dev</option>
        <option value="Backend Dev">Backend Dev</option>
        <option value="Full Stack Dev">Full Stack Dev</option>
        <option value="AR-VR Dev">AR-VR Dev</option>
      </select>
      <button className='flex justify-center items-center p-5 rounded-r-xl bg-gray-100 hover:bg-gray-300 border-l border-gray-300'><Search/>Search Job</button>
    </div>
  )
}

export default HeroSectionButton
