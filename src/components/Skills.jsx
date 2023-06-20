import React from 'react'
let skills = [
    {
        name: "HTMl",
        experience: "4"
    },
    {
        name: "CSS",
        experience: "4"
    },
    {
        name: "Javascript",
        experience: "3"
    },
    {
        name: "React.js",
        experience: "3"
    },
    {
        name: "Next.js",
        experience: "3"
    },
    {
        name: "Node.js",
        experience: "3"
    }
    ,
    {
        name: "Express.js",
        experience: "3"
    }
    ,
    {
        name: "Mongodb",
        experience: "3"
    }
    ,
    {
        name: "Mysql",
        experience: "3"
    }


]
const Skills = () => {
    return (
        <section className='skills'>
            {
                skills.map((skill) => {
                    return (
                        <div>
                            <h3>{skill.name}</h3>
                            <p>{skill.experience} years Experience</p>
                        </div>
                    )
                })
            }
        </section>

    )
}

export default Skills