import {Search} from 'lucide-react'

function HeroSectionButton() {
  return (
    <div className='bg-white rounded-xl flex flex-col md:flex-row mt-10 drop-shadow-lg p-5'>
      <input type="text" placeholder='Job Title or Company' className='md:border-r border-b md:border-0 pb-2 border-gray-300 p-' />
      <select name="location" id="location" className='md:border-r border-b   md:border-0 border-gray-300 p-5'>
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
      <button className='flex gap-2 bg-gray-100 pl-5 items-center p-2 md:rounded-r-xl hover:bg-gray-300'><Search/>Search Job</button>
    </div>
  )
}

export default HeroSectionButton
