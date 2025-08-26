import Image from 'next/image'
import React from 'react'

const Skills = () => {
    const projects = [
        {
            name: "JavaScript",
            image: "@mmsdl"
        },
        {
            name: "Next.js",
            image: "@mmsdl"
        },
        {
            name: "Typescript",
            image: "@mmsdl"
        },
        {
            name: "Postgres SQL",
            image: "@mmsdl"
        },
        {
            name: "MonogDB",
            image: "@mmsdl"
        },
        {
            name: "Node.js",
            image: "@mmsdl"
        },
        {
            name: "HTML 5",
            image: "@mmsdl"
        },
        {
            name: "CSS 3",
            image: "@mmsdl"
        },
        {
            name: "C",
            image: "@mmsdl"
        },
        {
            name: "Tailwinds CSS",
            image: "@mmsdl"
        },
        {
            name: "React.js",
            image: "@mmsdl"
        },
        {
            name: "Drizzle",
            image: "@mmsdl"
        },
        {
            name: "Prisma",
            image: "@mmsdl"
        },
        {
            name: "Supabase",
            image: "@mmsdl"
        },
        {
            name: "Appwrite",
            image: "@mmsdl"
        },
        
    ]
  return (
    <div className='app-container'>
        <div className="grid gap-8">
            <div className="grid gap-4 text-center">
                <h2 className="text-4xl font-bold">Skills</h2>
                <p>I am competent in the following skills.</p>
            </div>
            <div className="w-full md:max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((skill,index) => (
                        <div key={index} className="shadow-md hover:dark:shadow-gray-800/40 cursor-pointer border-[0.1rem] hover:border-black/40 border-black/20 dark:hover:border-white/40 dark:border-white/20 rounded-2xl overflow-hidden">
                            <div className="grid p-2 gap-4 text-center">
                                <Image src="/vercel.svg" alt={skill.name} height={100} width={100} className='mx-auto'/>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills