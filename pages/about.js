import React from 'react'
import Image from 'next/image'

function about() {
  return (
    <section className="text-white bg-black body-font pb-32">
      <h1 className='text-4xl md:text-6xl font-sans font-semibold md:tracking-wider pt-16 pl-10 md:pl-16'>ABOUT ME</h1>
      <h1 className="title-font sm:text-3xl text-2xl font-medium text-white pt-4 pl-10 md:pl-16">A bit more about me</h1>
        <div className="mx-auto flex px-5 flex-col-reverse md:flex-row">
          <div className="pt-10 md:pt-20 lg:flex-grow md:w-2/3 md:pr-16 flex flex-col md:items-start md:text-left md:pl-14 mb-16 md:mb-0 items-center text-center">
            <p className="mb-2 leading-relaxed">First of all, I wanted to say thanks for finding time to go through my page! I appreciate you considering me.</p>
            <p className="leading-relaxed">My name is Muhammad Irfan, and i'm a fresh UI/UX Designer. I love helping comapnies of all sized impact the world positively and bring their vision to life through great UI/UX. </p>
          </div>
          <div className="pt-10 md:pt-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="ml-10 md:ml-0 rounded-2xl h-96"  alt="profile" src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/312145891_106364132282998_5704632176971507205_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f_Uw-wWyZ4IAX-bta6C&_nc_ht=scontent.flhe6-1.fna&oh=00_AfDI58CtVJODiIPc24qTQfZtQBIimg2qVASckDDsHNnv2g&oe=63A39B68"/>
          </div>
        </div>
      </section>
  )

}

export default about