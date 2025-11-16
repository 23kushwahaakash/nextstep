import React from 'react'

function CompanyCards({logo,title,content,jobOpen}) {
  return (
    <div className='rounded-xl flex flex-col  items-center bg-white py-10 px-5 w-full'>
      <img src={logo} alt="logo" className='w-10 h-10'/>
      <h1 className='text-2xl font-semibold mt-3 mb-5'>{title}</h1>
      <p className='text-center'>{content}</p>
      <div className='mt-8 bg-[#3096891A] text-green-500 px-1 rounded-xl'>{jobOpen}</div>
    </div>
  )
}

export default CompanyCards
