




export default function MedicalServices() {
  const services = [
    {
      title: "Cardiac Clinic",
      description: "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
      image: "images/h1-custom-icon-1.png",
    },
    {
      title: "Emergency Clinic",
      description: "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
      image: "images/h1-custom-icon-2.png",
    },
    {
      title: "Precise Diagnosis",
      description: "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
     image: "images/h1-custom-icon-3.png",
    },
    {
      title: "Primary Care",
      description: "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
     image: "images/h1-custom-icon-4.png",
    },
    {
      title: "Vascular Surgery",
      description: "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
image: "images/h1-custom-icon-5.png",
    },
    {
      title: "General Surgery",
      description: "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
   image: "images/h1-custom-icon-6.png",
    },
  ]

  return (
   <>
   <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
       

{
    services.map((service,index)=>(
        <div key={index} className="flex gap-5 items-center serviceItem">
       <img src={service.image} alt="" className="h-16 w-16 serviceImg" />
       <div >
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
        </div>
        </div>

    ))
}


        </div>
        </div>
    </section>
   </>
  )
}

