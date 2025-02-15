import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Linkedin, MapPin, Phone, PinIcon as Pinterest, Twitter } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#1E2124] text-white py-16">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">

           <NavLink
                         id="Medical"
                         aria-label="Medical logo"
                         aria-current="page"
                         className="flex items-center gap-2 whitespace-nowrap py-3 text-xl lg:text-2xl focus:outline-none lg:flex-1  text-[#43d5cb] hover:text-[#23a39b] "
                         to="/"
                       >
                    
                    SafeGrow Medical
                       </NavLink>
            </div>

            <p className="text-gray-300 mb-6">
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
              augue duis dolore te feugait nulla facilisi mazim placerat
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#4FD1C5]" />
                <span>Street, 11000 Helsinki, Finland</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#4FD1C5]" />
                <span>(+123)11 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#4FD1C5]">@</span>
                <span>mediclinic@qodeinteractive.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#4FD1C5]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4FD1C5]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4FD1C5]">
                <Pinterest className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4FD1C5]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Latest News</h3>
            <div className="space-y-6 flex flex-col items-start justify-center">
              {[
                {
                  title: "Medical Research",
                  date: "April 12, 2017",
                  image:
                    "images/blog-post-1.jpg",
                },
                {
                  title: "Achieving Better Health",
                  date: "April 13, 2017",
                  image:
                    "images/blog-post-2.jpg",
                },
                {
                  title: "Amazing Technology",
                  date: "April 13, 2017",
                  image:
                    "images/blog-post-3.jpg",
                },
              ].map((news, index) => (
                <div key={index} className="flex items-start justify-start gap-4">
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium hover:text-[#4FD1C5] cursor-pointer">{news.title}</h4>
                    <p className="text-sm text-gray-400">{news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

{/* for all
 */}
 <div>
 <p className="text-gray-300">
                For all the latest news and updates, follow us on Twitter: @QodeInteractive.com
              </p>
 </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              
            <form className="space-y-4"
  action="https://formspree.io/f/xzzdayqw"
  method="POST"
>
  <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#2A2D31] border-0 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Message"
                  className="bg-[#2A2D31] border-0 text-white placeholder:text-gray-400 min-h-[120px]"
                />
                <Button className="bg-[#4FD1C5] hover:bg-[#3BB7AB] text-white" type="submit">Submit</Button>
</form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex justify-between items-center">
          <p className="text-gray-400">© 2025 Qode Interactive, All Rights Reserved by Md Rasel</p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#4FD1C5] hover:bg-[#3BB7AB] text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
          >
            ^
          </Button>
        </div>
      </div>
    </footer>
  )
}

