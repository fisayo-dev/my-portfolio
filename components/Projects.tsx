import Image from 'next/image'
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
            title: "Code Assistant",
            description: "The website of a code assistant (frontend)",
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
            title: "Bookmark Hub",
            description: "A web app that stores your favourite website link",
            link: "https://www.github.com",
            category: "web app"
        },
        {
            image: "",
            title: "Business Review bot",
            description: "A telegram bot that register business and helps them advertise themselves. ",
            link: "http://t.me/bot",
            category: "bot"
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.reverse().map((one,index) => (
                        <div key={index} className="shadow-md hover:dark:shadow-gray-800/40 cursor-pointer border-[0.1rem] hover:border-black/40 border-black/20 dark:hover:border-white/40 dark:border-white/20 rounded-2xl overflow-hidden">
                            <div className="p-6 items-center gap-2 space-y-3">
                                <Image src={one.image || "/next.svg"} alt={one.title} height={200} width={200} className='dark:invert'/>
                                <h2 className="md:text-clip text-xl font-bold">{one.title}</h2>
                                <p className='text-sm'>{one.description.length > 50 ? `${one.description.substring(0,50)}...` : `${one.description}.`}</p>
                                <span className='text-sm p-2 bg-black/20 dark:bg-white/20 rounded-full '>{one.category}</span>
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