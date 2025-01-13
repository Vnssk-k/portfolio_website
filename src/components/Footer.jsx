import "./Footer.css"
import InstagramLogo from "../assets/instagram.png"
import GithubLogo from "../assets/github.png"
function Footer() {
 
    return (
      <div className="footer">
        <div className="social-media">
        <a href="https://www.instagram.com/vnssk_?igsh=M3FscmJkdjdmcmE0&utm_source=qr" className='instagram' target="_blank" rel="noopener noreferrer">
        <img src={InstagramLogo} alt='instagram logo'/>
        </a>
 
        <a href="https://github.com/Vnssk-k?tab=overview&from=2025-01-01&to=2025-01-12" className='github' target="_blank" rel="noopener noreferrer">
        <img src={GithubLogo} alt='github logo'/>
        </a>
        </div>
       
        <div className='copy-right'>
        Olga Hrustaljova 2025 © All Rights Reserved
        </div>
 
      </div>
    )
  }
 
  export default Footer
 
  