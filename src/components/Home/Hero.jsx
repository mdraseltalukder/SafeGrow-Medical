
export default function Hero() {
  return (
    <section className="min-h-screen  w-full flex items-center "
    style={{
        backgroundImage: "url('images/h7-background-img-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}
    >
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl space-y-6">
          <div className="">
            <h1 className=" font-medium text-gray-800">Physical Exams</h1>
            <h1 className=" font-bold text-gray-900">Are Crucial For Kids</h1>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl
            ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim.
          </p>
      
        </div>
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 right-0 w-full h-full  rounded-full" />
          <img
            src="images/h7-img-8.png"
            alt="Illustration of a child"
            width={500}
            height={500}
            className="relative z-10"

          />
        </div>
      </div>
    </section>
  )
}

