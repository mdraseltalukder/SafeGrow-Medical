import { Link } from "react-router-dom";

export default function ContactBanner() {
  return (
   <>
          <section className='py-16 lg:py-28 flex flex-col items-center justify-center relative' 
         style={{
          backgroundImage: "url('images/contact-us.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
         }}>

         <div className='absolute inset-0 bg-[#4cd2cb8f] '></div>
              <h1 className='z-20'>Contact Us</h1>
              <div className='z-20'>
              <span><Link to="/" className='hover:text-[#00ffee] '> Home {">>"} </Link></span>
              <span>Contact us Us</span>
              </div>
          </section>
      </>
  )
}

