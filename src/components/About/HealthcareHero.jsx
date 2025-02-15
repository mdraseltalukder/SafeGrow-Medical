import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HealthcareHero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              <span className="text-muted-foreground">Finest Patient</span>
              <br />
              Care & Amenities
            </h1>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Ut wisi enim ad minim dolore</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Veniam quis laore nostrud</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Exerci tation ulm hedi corper</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Turet suscipit lobortis littera</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Ut wisi enim ad minim dolore</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Veniam quis laore nostrud</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Exerci tation ulm hedi corper</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <p className="text-muted-foreground">Turet suscipit lobortis littera</p>
              </div>
            </div>
          </div>

          <Link to="/about" className="bg-emerald-400 hover:bg-emerald-500 px-4 py-2 active:scale-95 text-white flex justify-self-start">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="relative h-[500px] w-full">
          <img
            src="images/about-us-img-1.jpg"
            alt="Healthcare professionals"

            className="object-contain"
    
          />
        </div>
      </div>
    </section>
  )
}

