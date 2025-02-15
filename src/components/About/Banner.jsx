import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
        <section className='py-16 lg:py-28 flex flex-col items-center justify-center relative' 
       style={{
        backgroundImage: "url('images/about-us-blog-img-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
       }}>
       <div className='aboutBanner'></div>
            <h1 className='z-20'>About Us</h1>
            <div className='z-20'>
            <span><Link to="/" className='hover:text-[#43d5cb] '> Home {">>"} </Link></span>
            <span>About Us</span>
            </div>
        </section>
    </>
  )
}
