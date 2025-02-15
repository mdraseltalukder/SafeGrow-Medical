import { ArrowRight } from "lucide-react"

export default function HealthSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-full transform scale-125" />
            <img
              src="images/h7-img-3.png"
              alt="Illustration of a child"
              width={500}
              height={500}
              className="relative z-10"
  
            />
          </div>

          <div className="max-w-xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-normal text-gray-800">Leading You To</h2>
              <p className="text-4xl font-bold text-gray-900">Better Health</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
              nisl ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nis ipsum aliquenean.
            </p>

            <a href="/" className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-md px-6 py-2 flex justify-self-start">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

