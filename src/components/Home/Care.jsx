
// const careIcons = [
//   {
//     icon: Apple,
//     bgColor: "bg-amber-400",
//   },
//   {
//     icon: Pill,
//     bgColor: "bg-sky-300",
//   },
//   {
//     icon: Bandage,
//     bgColor: "bg-rose-400",
//   },
//   {
//     icon: Thermometer,
//     bgColor: "bg-teal-400",
//   },
// ]

export default function Care() {
  return (
   <>
   <hr />
     <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0  rounded-full transform scale-125" />
            <img
              src="images/h7-img-1.png"
              alt="Illustration of a child"
              width={500}
              height={500}
              className="relative z-10"
              
            />
          </div>

          <div className="flex flex-col items-start space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-normal text-gray-800">Giving Kids</h2>
              <p className="text-4xl font-bold text-gray-900">The Best Care</p>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
              nisl ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
              qui blandit.
            </p>

            <div className="flex gap-4">
              <img src="images/h7-img-9.png" alt="icons" />
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

