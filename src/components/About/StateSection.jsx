
export default function StatsSection() {
  const stats = [
    {
      number: "22",
      label: "Health Sections",
    },
    {
      number: "146",
      label: "Different Services",
    },
    {
      number: "388",
      label: "Blood Donations",
    },
    {
      number: "1280",
      label: "Satisfied Patients",
    },
  ]

  return (
    <section className="" 
    style={{
        backgroundImage: "url('images/h1-parallax-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
     backgroundAttachment: "fixed",
      
       }}
    >
  
     

      {/* Stats Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{stat.number}</div>
              <div className="text-sm md:text-base text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

