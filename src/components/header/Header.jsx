import './header.css'

function Header() {
  return (
    <div className='ota'>
      <header className='container'>
        <img src="./l.png" alt="" />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About Us</a></li>
            <button  className='btn'>Login</button>
            <button  className='btn'>Sign up</button>
        </ul>
        
      </header>
      <div className="box container">
        <div className="text">
            <h1><span>Studying </span> Online is now <br /> much easier</h1>
            <p>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
            <div className="vid">
            <button className='btn'>Join for free</button>
            <img src="./v.png" alt="" />
            Watch how it works
        </div>
            
        </div>
        
        <img src="./h.png" alt="" />
      </div>
    </div>
  )
}

export default Header
