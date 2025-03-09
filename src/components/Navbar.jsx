import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
const Navbar = () => {
    return (
        <header className='navbar'>
            <h1>Sandeep</h1>
            <nav className='links'>
                <ul>
                    <li><a href="https://github.com/1sandeep420"><AiFillGithub color='white' /></a></li>
                    <li><a href="https://www.linkedin.com/in/sandeep-balaveni-68586a220"><AiFillLinkedin color='white' /></a></li>
                    <li><a href="https://twitter.com/sandeepbalaveni"><AiFillTwitterCircle color='white' /></a></li>
                    <li><a href="https://drive.google.com/file/d/1fO9KN7nUOkjVKZnEsFLnB-5nEYG7wceb/view?usp=drive_link" download>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar