import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            {/* <img src={footer_logo} alt="" /> */}
            <p></p>
        </div>
        {/* <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Neelesh Nainwal.</p>
        {/* <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <a className='anchor-link' href='https://www.linkedin.com/in/neelesh-nainwal-784535201' target='_blank' rel='noopener noreferrer'>Connect with me</a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
