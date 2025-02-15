"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"


const testimonials= [
  {
    id: 1,
    name: "Jenna Sharp",
    title: "Gynecologist",
    content:
      "The service was outstanding! The team was professional, attentive, and ensured that every detail was perfect. Highly recommended!",
    image: "images/h10-testimonials-1.png",
  },
  {
    id: 2,
    name: "Nathan Becker",
    title: "Neurologist",
    content:
      "I was impressed with the level of dedication and expertise. The results exceeded my expectations. Thank you for the excellent work!",
      image: "images/h10-testimonials-2.png",
  },
  {
    id: 3,
    name: "Rufus Lewis",
    title: "Cardiologist",
    content:
      "An absolutely amazing experience! The attention to detail and customer service were exceptional. Would definitely use again!",
      image: "images/h10-testimonials-3.png",
  },
]

    export function TestimonialSlider() {
        const [currentIndex, setCurrentIndex] = React.useState(0)
      
        const nextSlide = React.useCallback(() => {
          setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
        }, [])
      
        const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
        }
      
        const goToSlide = (index) => {
          setCurrentIndex(index)
        }
      
        React.useEffect(() => {
          const interval = setInterval(() => {
            nextSlide()
          }, 5000) // Change slide every 5 seconds
      
          return () => clearInterval(interval)
        }, [nextSlide])
      
        return (
          <div className="relative mx-auto    overflow-hidden bg-[#f1fdfc] py-20 px-20">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="text-center max-w-[900px] mx-auto">
                    <div className="mb-8 flex justify-center">
                      <div className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-primary">
                        <img src={testimonial.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <p className="mb-8 text-lg text-muted-foreground">{testimonial.content}</p>
                    <div className="text-2xl font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              ))}
            </div>
      
        
          <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-primary p-3 ml-20 text-primary-foreground shadow-lg transition-transform hover:scale-110 bg-[#01a597]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
      
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-primary p-3 mr-20 text-primary-foreground shadow-lg transition-transform hover:scale-110 bg-[#01a597]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
      
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? "bg-[#01a597]" : "bg-muted"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )
      }
      
      