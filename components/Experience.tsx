import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Experience = () => {
    const experience: WorkExperience[] = [
        {
            company: "Printeaze",
            logo: "",
            startDate: "29th March",
            endDate: "20th April, 2025",
            role: "Full-Stack developer",
            website: "https://printeaze.com/"
        },
        {
            company: "Shopsical",
            logo: "",
            startDate: "1st May",
            endDate: "30th May, 2025",
            role: "Full-Stack developer",
            website: "https://www.instagram.com/shopsical/"
        },
        {
            company: "Fullstack Creators ",
            logo: "",
            startDate: "27th March, 2025",
            endDate: "Present",
            role: "Frontend Developer",
            website: "https://fullstackcreators-beta.vercel.app/"
        },
    ]
  return (
    <div className='app-container'>
        <div className="grid gap-8">
            <div className="grid gap-4 text-center">
                <h2 className="text-4xl font-bold">Experience</h2>
                <p>For the past 5 years I have displayed excellence at these companies.</p>
            </div>
            <div className="w-full md:max-w-2xl mx-auto">
                <div className="grid gap-6">
                    {experience.reverse().map((one,index) => (
                        <Link href={one.website}  key={index} className="shadow-md cursor-pointer border-[0.1rem] hover:border-black/40 border-black/20 dark:hover:border-white/40 dark:border-white/20 rounded-2xl overflow-hidden">
                            <div className="flex p-4 items-center gap-6">
                                <Image src={one.logo || "/globe.svg"} alt={one.company} height={50} width={50}/>
                                <div className="grid gap-1 w-full">
                                    <h2 className="md:text-clip text-xl font-bold">{one.company}</h2>
                                    <p className='text-sm'>{one.role}</p>
                                    <span className='text-sm'>{one.startDate} - {one.endDate}</span>
                                </div>
                                <Image src="/file.svg" alt={one.website} height={30} width={30} className='md:block hidden'/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience