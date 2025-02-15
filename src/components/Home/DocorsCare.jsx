
export default function DoctorsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-normal text-gray-800">Better Doctors,</h2>
              <p className="text-4xl font-bold text-gray-900">Better Care</p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                nisl ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat, vel illum dolore eu feugiat.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Obortis nisl ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat ut wisi enim ad minim veniam, volutpat autem vel illum dolore eu feugiat nulla.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0  rounded-full transform scale-125" />
            <img
              src="images/h7-img-2.png"
              alt="Illustration of a child experiencing discomfort"
              width={500}
              height={500}
              className="relative z-10"
              
            />
          </div>
        </div>
      </div>
    </section>
  )
}

