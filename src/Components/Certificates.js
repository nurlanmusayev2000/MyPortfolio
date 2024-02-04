import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cert1 from '../imgs/e05c124a-ce9f-4e13-9c07-c2148692d860-1.png'
import cert2 from '../imgs/FRB1.PNG'
import cert3 from '../imgs/frb2.PNG'
import cert4 from '../imgs/frb3.PNG'
import cert5 from '../imgs/NurlanMusayev - Data Cleaning.png'
import cert6 from '../imgs/NurlanMusayev - Data Visualization.png'
import cert7 from '../imgs/NurlanMusayev - Geospatial Analysis.png'
import cert8 from '../imgs/NurlanMusayev - Intro to Machine Learning.png'
import cert9 from '../imgs/NurlanMusayev - Intro to Programming.png'
import cert10 from '../imgs/NurlanMusayev - Pandas.png'
import cert11 from '../imgs/AWS.PNG'
import cert12 from '../imgs/Endress+Hauser.jpg'
import cert13 from '../imgs/C sharp.jpg'



import img1 from '../imgs/img1.jpeg'
import {Link} from 'react-router-dom';

const Certificates=()=>{


	return(<div className='cert'>
	<div className="navbar">
		<div className="left-side">

			<div className='myimage'><img src={img1} alt="" /></div>
			<div className='name-in-navbar'>Nurlan Musayev</div>
		</div>
		<div className="right-side">
			<Link to='/'>Home</Link>

		</div>
	</div>
	<div className="carusel-container">

		<Carousel>
			<div>
					<img className='cert-img' src={cert1} alt='' />
					<p className="legend">I hold a certificate from Developers Institute as a fullstack React Node.js developer, demonstrating my proficiency in modern web development technologies. With expertise in React.js and Node.js, I am equipped to create dynamic and scalable web applications, contributing effectively to innovative projects in the field of web development. <a href="https://octopus.developers.institute/courses/di_learning_certificate/e05c124a-ce9f-4e13-9c07-c2148692d860">show credential</a></p>
			</div>
			<div>
					<img className='cert-img' src={cert2} alt='' />
					<p className="legend">I have obtained a certificate from FreeCodeCamp.org, indicating my competence in various aspects of web development. Through dedicated self-paced learning and practical exercises, I have acquired proficiency in front-end libraries such as Bootstrap, jQuery, and AngularJS. This certificate acknowledges my commitment to mastering essential front-end technologies and advancing my skills in web development. With the knowledge gained from FreeCodeCamp.org, I am well-prepared to contribute effectively to dynamic web projects and initiatives. <a href="https://www.freecodecamp.org/certification/fcc9faa140a-0b91-490f-8131-e068f0361bbd/front-end-development-libraries">check credential</a></p>
			</div>
			<div>
					<img className='cert-img' src={cert3} alt='' />
					<p className="legend">I am pleased to have earned a certificate from FreeCodeCamp.org, recognizing my proficiency in JavaScript algorithms and data structures. Through dedicated study and hands-on practice, I have developed a solid understanding of fundamental concepts such as algorithms, data structures, and problem-solving techniques using JavaScript. This certificate underscores my commitment to honing my skills in programming and my readiness to tackle complex challenges in software development. With the knowledge acquired from FreeCodeCamp.org, I am well-equipped to contribute effectively to projects requiring robust algorithmic solutions and efficient data management. <a href="https://www.freecodecamp.org/certification/fcc9faa140a-0b91-490f-8131-e068f0361bbd/javascript-algorithms-and-data-structures-v8">Check Credential</a></p>
			</div>
			<div>
					<img className='cert-img' src={cert4} alt='' />
					<p className="legend">I have obtained a certificate from FreeCodeCamp.org, recognizing my proficiency in responsive web design. Through dedicated study and practical projects, I have developed a thorough understanding of creating websites that adapt effectively to different screen sizes and devices. This certificate underscores my commitment to mastering the principles of responsive design and my readiness to implement them in real-world projects. With the knowledge gained from FreeCodeCamp.org, I am well-equipped to design user-friendly and accessible websites across various platforms. <a href="https://www.freecodecamp.org/certification/fcc9faa140a-0b91-490f-8131-e068f0361bbd/responsive-web-design">Check Credential</a></p>
			</div>
			<div>
					<img className='cert-img' src={cert4} alt='' />
					<p className="legend">I have obtained a certificate from FreeCodeCamp.org, recognizing my proficiency in responsive web design. Through dedicated study and practical projects, I have developed a thorough understanding of creating websites that adapt effectively to different screen sizes and devices. This certificate underscores my commitment to mastering the principles of responsive design and my readiness to implement them in real-world projects. With the knowledge gained from FreeCodeCamp.org, I am well-equipped to design user-friendly and accessible websites across various platforms. <a href="https://www.freecodecamp.org/certification/fcc9faa140a-0b91-490f-8131-e068f0361bbd/responsive-web-design">Check Credential</a></p>
			</div>
			<div>
					<img className='cert-img' src={cert5} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert6} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert7} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert8} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert9} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert10} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert11} alt='' />
					<p className="legend"></p>
			</div>
			<div>
					<img className='cert-img' src={cert13} alt='' />
					<p className="legend"></p>
			</div>

		</Carousel>
	</div>
	</div>
)
}

export default Certificates