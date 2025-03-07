
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about-profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Aspiring Full-Stack Developer | JavaScript | React | Node.js | MERN Stack</p>
                <p>I am a passionate and motivated full-stack developer skilled in JavaScript, React, Node.js, Redux, Tailwind CSS, and the MERN stack. I have built projects that showcase my ability to develop dynamic and responsive web applications. While I don’t have formal work experience, I am eager to apply my skills in a real-world setting through an internship or job opportunity. I am a quick learner, problem-solver, and always excited to explore new technologies. Open to opportunities where I can contribute, grow, and collaborate with a team to build impactful applications.</p>
            </div>
            <div className="about-skills">
               
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Redux</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>NodeJs</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Tailwind</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>0</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        
         <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div> 
      </div> */}
    </div>
  )
}

export default About
