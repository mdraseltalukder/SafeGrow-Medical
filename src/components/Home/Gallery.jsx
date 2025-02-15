

const galleryItems=[
  {
    title: "Good Nutrition",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-1.png",
  },
  {
    title: "Organic Food",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-2.png",
  },
  {
    title: "Feeling Healthy",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-3.png",
  },
  {
    title: "Eat Right",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-4.png",
  },
  {
    title: "Grown By Nature",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-5.png",
  },
  {
    title: "Eat Greens",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-6.png",
  },
  {
    title: "Live Strong",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-7.png",
  },
  {
    title: "Take Vitamins",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
    imageSrc: "images/h7-custom-icon-8.png",
  },
]

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">Gallery Of Our Clinic</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem
            insitamconsequat duis autem mazim placerat facer possim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="galleryItem flex flex-col items-center text-center space-y-4 ">
              <div className="relative w-20 h-20 mb-2">
                <img src={item.imageSrc || "/placeholder.svg"} alt={item.title} fill className="object-cover galleryImg w-24 h-24" />

              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
   
    </section>
  )
}

