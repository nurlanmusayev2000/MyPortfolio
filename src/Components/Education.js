import img1 from '../imgs/img1.jpeg'
import { Link } from 'react-router-dom'
const Education=()=>{






	return(
		<div className="education-container" id="education">
			<div className="navbar">
				<div className="left-side">

					<div className='myimage'><img src={img1} alt="" /></div>
					<div className='name-in-navbar'><Link to='/' className='name-link'>Nurlan Musayev</Link></div>
				</div>
				<div className="right-side">
					<Link to='/'>Home</Link>

				</div>
			</div>
			<div className="aboutMyEducation">
				<h1 className="edu-title">Education</h1>
				<p>In this section you can find all details about my <em>education</em> period</p>
			</div>
			<div className="bachelor border-bottom" >
				<h2 className="bach-title">Bachelor</h2>
				<div className='bach-section my-2'>

					<div className="bach-paragraph mx-2">
						<p>I have graduated from <strong>Baku Engineer University</strong>  in 2021.My field was  <strong>Process Automation Engineering.</strong> </p>
						<p>My bachelor's journey in process automation engineering was a voyage into innovation. From lectures to collaborative projects, each moment revealed the intricate balance between technology and efficiency. Challenges tested my resolve, but also fueled my growth. With each setback came a lesson in resilience and adaptability. Graduation marked not just the end of a degree, but the beginning of a journey fueled by passion and purpose.</p>
					</div>
				</div>
			</div>
			<div className="bachelor border-bottom " >
				<h2 className="bach-title">Master</h2>
				<div className='bach-section'>

					<div className="bach-paragraph mx-2">
						<p>My Master study continue in <strong>WSB Academy</strong> <em>Poland.</em>My master's specialty is <strong>Computer Science</strong></p>
						<p>Embarking on my master's voyage in computer science was akin to setting sail into uncharted waters of innovation and discovery. From the inaugural lectures to collaborative projects, each moment unfurled the intricate tapestry of technology's potential and its profound impact on the world.Challenges emerged as steadfast companions along this odyssey, testing the depths of my resolve while simultaneously nurturing my intellectual growth. With each obstacle encountered, I unearthed lessons in resilience and adaptability, forging ahead with renewed determination and a thirst for knowledge.As the echoes of graduation faded into the horizon, they marked not merely the culmination of a degree, but rather the genesis of a journey driven by an unwavering passion and a resolute sense of purpose. In the vast expanse of computer science, I find not only a field of study but a canvas upon which to paint my aspirations and contribute meaningfully to the ever-evolving landscape of technology.</p>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Education