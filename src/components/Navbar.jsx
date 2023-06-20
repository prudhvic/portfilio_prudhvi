import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { GrResume } from "react-icons/gr"

const Navbar = () => {
    return (
        <header className='navbar'>
            <h1>Prudhvi Krishna</h1>
            <nav className='links'>
                <ul>
                    <li><a href="https://github.com/prudhvic"><AiFillGithub color='white' /></a></li>
                    <li><a href="https://www.linkedin.com/in/prudhvi-chinnam-38a9a2209/"><AiFillLinkedin color='white' /></a></li>
                    <li><a href="https://twitter.com/prudhvichinnam6"><AiFillTwitterCircle color='white' /></a></li>
                    <li><a href="/public/assets/resume.pdf" download>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar