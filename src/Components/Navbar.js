import img1 from '../imgs/img1.jpeg'
import {  Link } from "react-router-dom";
import { RiDropdownList } from "react-icons/ri";

const Navbar=()=>{



	return(
		<div className="navbar">
			<div className="left-side">

				<div className='myimage'><img src={img1} alt="" /></div>
				<div className='name-in-navbar'>Nurlan Musayev</div>
			</div>
			<div className="right-side">
				<a href="#Home">Home</a>
				<a href="#aboutme">About</a>
				<a href="#projects">Project</a>
				<Link to='/education' >Education</Link>
				<Link to='/certificates'>Certificates</Link>
				<a href="#contact">Contact</a>
			</div>
			<div className="drop-menu">
				<button className='drop-btn'><i><RiDropdownList /></i></button>
				<ul className='drop-list'>
					<li className='list-item'><a href="#Home">Home</a></li>
					<li className='list-item'><a href="#aboutme">About</a></li>
					<li  className='list-item'><a href="#projects">Project</a></li>
					<li  className='list-item'><Link to='/education' >Education</Link></li>
					<li  className='list-item'><Link to='/certificates'>Certificates</Link></li>
					<li  className='list-item'><a href="#contact">Contact</a></li>

				</ul>
			</div>
		</div>
	)
}

export default Navbar
