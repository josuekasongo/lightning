const Skills = () => {
    return (
      <section className=" pt-20 lg:pt-32 bg-gray-200" id="home">
        <div className="container section items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
          <div className="">
          <h1><strong>Compétence en Programmation</strong></h1>
             <p>Lorem ipsum odor amet,consectetur adipiscing elit Gravida</p>
             <p>dapibus leo eros venenatis fames pellentesque.Suspendisse</p>
             <p>massa fermentum leo egestas porta morbi varius taciti.Lorem</p>
             <p>ipsum dolor sit amet consecteur,adipiscing elit.Error obcaecati</p>
             <p>maxime,quam ispa laborum accusamus, natus cum cumque dignissimos</p>
              <p>cupiditate assumenda repudiae dolorem amet</p>
              <ul>
                <li className="justify-between"><b>Javascript</b><h4 className="text-red-600 text-right">1%</h4></li><br></br>
                <div className="bg-gray-400 rounded-lg p-2 w-100%">
                    <div className="bg-blue-300 rounded-lg p-1"></div>
                </div>
                <li><b>Java</b><h4 className="text-red-600 text-right">1%</h4></li>
                <div className="bg-gray-400 rounded-lg p-2 w-100%">
                    <div className="bg-blue-300 rounded-lg p-1"></div>
                </div>
                 <li><b>React.jsx</b><h4 className="text-green-600 text-right">5%</h4></li>
                 <div className="bg-gray-400 rounded-lg p-2 w-100%">
                    <div className="bg-blue-500 rounded-lg p-1 w-[5%]"></div>
                </div>
                <li><b>Next.jsx</b><h4 className="text-red-600 text-right">0%</h4></li>
                 <div className="bg-gray-400 rounded-lg p-2 w-100%">
                    <div className="bg-red-600 rounded-lg p-1 w-[40%]"></div>
                </div> 
              </ul>
              
          </div>
          <figure className="w-full lg:max-w-[320px] lg:ml-auto mx-auto rounded-lg  bg-gradient-to-b items-center from-blue-600 to-red-600 ">
          <img src="/images/portrait.jpg" width={640} height={840} alt="" className="w-full" />
          </figure>
           
        </div>
      </section>
                

    )
             
        
          
  }
  
  export default Skills