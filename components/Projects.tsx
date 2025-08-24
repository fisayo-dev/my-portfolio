import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    const projects: WorkProjects[] = [
        {
            image: "",
            title: "Abscissa",
            description: "A mathematical asstant for students",
            link: "http://abscissa.vercel.app/",
            category: "web app"
        },
        {
            image: "",
            title: "SaveIdea",
            description: "A Full-stack app that saves users ideas",
            link: "http://saveidea.vercel.app/",
            category: "web app"
        },
        {
            image: "",
            title: "Code Assitant",
            description: "The website of a code assistant (frontend) ",
            link: "https://codebox-ai-assistant.vercel.app/",
            category: "website"
        },
        {
            image: "",
            title: "Shopapp API",
            description: "An api designed for shopping website with admin functionality",
            link: "https://www.github.com",
            category: "api"
        },
        {
            image: "",
            title: "Shopapp API",
            description: "An api designed for shopping website with admin functionality",
            link: "https://www.github.com",
            category: "api"
        },
        {
            image: "",
            title: "Business Review bot",
            description: "A telegram bot that register business and helps them advertise themselves. ",
            link: "http://t.me/bot",
            category: "web app"
        },
        
    ]
  return (
    <div className='app-container'>
        <div className="grid gap-8">
            <div className="grid gap-4 text-center">
                <h2 className="text-4xl font-bold">Projects</h2>
                <p>Here are my top projects.</p>
            </div>
            <div className="w-full md:max-w-5xl mx-auto">
                <div className="grid grid-cols-3 gap-6">
                    {projects.reverse().map((one,index) => (
                        <div  key={index} className="shadow-md cursor-pointer border-[0.1rem] hover:border-black/40 border-black/20 dark:hover:border-white/40 dark:border-white/20 rounded-2xl overflow-hidden">
                            <div className="grid p-6 items-center gap-6">
                                <Image src={one.image || "/next.svg"} alt={one.title} height={200} width={200} className='dark:invert'/>
                                <div className="grid gap-1 w-full">
                                    <h2 className="md:text-clip text-xl font-bold">{one.title}</h2>
                                    <p className='text-sm'>{one.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects