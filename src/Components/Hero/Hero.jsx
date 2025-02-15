import './Hero.css'
import profile_img from '../../assets/about-profile.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Neelesh Nainwal,</span> aspiring MERN developer</h1>
      <p> I have built projects that showcase my ability to develop dynamic and responsive web applications. While I don’t have formal work experience, I am eager to apply my skills in a real-world setting through an internship or job opportunity</p>
      <div className="hero-action">
        <div className="hero-connect"><a className='anchor-link' href='https://www.linkedin.com/in/neelesh-nainwal-784535201' target='_blank' rel='noopener noreferrer'>Connect with me</a></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
