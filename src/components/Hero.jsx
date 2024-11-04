const Hero = () => {
  return (
    <section className="bg-gray-50 pt-20 lg:pt-32" id="home ">
      <div className="container section items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="">
            <p className="text-green-600 text-lg font-semibold mb-4"> </p>
            <h1 className="text-4xl font-extrabold">DEVELOPEUR INFORMATIQUE</h1>
            <ul className="mt-6 space-y-2">
              <li><a href="#" className="flex items-center text-lg hover:text-green-600">Web</a></li>
              <li><a href="#" className="flex items-center text-lg hover:text-green-600">Mobile</a></li>
              <li><a href="#" className="flex items-center text-lg hover:text-green-600">Software</a></li>
            </ul>
            <ul className="mt-6 -ml-1">

              <li className="flex items-center space-x-2">
                <strong className="strong">1+</strong>

                <span className="span">
                  Mois<br></br>
                  d&lsquo;experience
                </span>
              </li>
            </ul>
        </div>
        <figure className="w-full lg:max-w-[320px] lg:ml-auto mx-auto rounded-lg  bg-gradient-to-b items-center from-blue-600 to-red-600 transform rotate-3">
        <img src="/images/vitre.jpg" width={640} height={840} alt="" className="w-full" />
        </figure>
      </div>
    </section>
  )
}

export default Hero