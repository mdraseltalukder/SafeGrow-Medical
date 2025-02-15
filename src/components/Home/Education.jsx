import { Card } from "@/components/ui/card"

export function HealthEducation() { 
  const healthCards = [
    {
      title: "Handwashing Is An Important Part Of Your Job",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit",
      image: "images/h7-img-5.png",
      
    },
    {
      title: "Exercise To Be Strong And Your Life Prolong",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit",
      image: "images/h7-img-6.png",
     
    },
    {
      title: "Healthy Eating For A Strong Heart Beating",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit",
      image: "images/h7-img-7.png",
      
    },
  ]

  return (
    <section className=" mx-auto px-4 py-28">
    <div className=" container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Creating Healthier Lives</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem
          insitamconsequat duis autem mazim placerat facer possim
        </p>
      </div>

      <div className="flex flex-col md:flex-row   gap-8">
        {healthCards.map((card, index) =>(
          <Card
            key={index}
            className="border-none  transition-shadow flex flex-col gap-7 duration-300 items-start bg-white overflow-hidden"
          >

              <div className=" w-full h-64 mb-6">
                <img
                  src={card.image}
                  alt=""
                
                  
                />
              </div>


              <div className="text-xl font-bold text-gray-800  leading-tight text-start">
                {card.title}
              </div>
          
              <p className="text-gray-600  text-sm leading-relaxed text-start">{card.description}</p>
            
            <div className="flex justify-center pb-6">
              <a href="/" className="bg-[#4FD1C5] hover:bg-[#3BB7AB] hover:scale-95 text-white font-semibold px-6 py-2 rounded-md">
                Learn More
                <span className="ml-2 text-lg">→</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
    </section>
  )
}

