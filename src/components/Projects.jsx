let projects = [
    {
        img: "/assets/fitness-appv1.png",
        name: 'fitness website',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://fitness-app-jet.vercel.app/",
        code: "https://github.com/prudhvic/fitness_app"
    },
    {
        img: "/assets/Momentum.png",
        name: 'Responsive site',
        tools: ["HTML", "CSS"],
        link: "https://res-sittev2.vercel.app/#",
        code: "https://github.com/prudhvic/res_sittev2"
    },
    {
        img: "/assets/Musify-App.png",
        name: 'Musify website',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://react-player-inky.vercel.app/",
        code: "https://github.com/prudhvic/react-player"
    },
    {
        img: "/assets/Tip-calculator.png",
        name: 'Tip calculator',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://tipcalc-tau.vercel.app/",
        code: "https://github.com/prudhvic/tipcalc"
    },
    {
        img: "/assets/woodstock.png",
        name: 'ecommerce site',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://shopping-cart-lake-rho.vercel.app/",
        code: "https://github.com/prudhvic/shopping_cart"
    }
]

const Projects = () => {
    return (

        <section className="container">
            <h2>Projects</h2>
            <div className="projects">
                {projects.map((project) => (
                    <div>
                        <div className="img-container">

                            <img src={project.img} />
                            <div className="overlay">
                                <a href={project.link} target="_blank">Visit site</a>
                                <a href={project.code} target="_blank">Visit code</a>
                            </div>
                        </div>
                        <p>{project.name}</p>
                        <p className="tools">{project.tools.join(" ,  ")}</p>

                    </div>
                ))
                }
            </div>



        </section>
    )
}

export default Projects