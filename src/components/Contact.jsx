

const Contact = () => {
    return (
      <section className="bg-gray-200 pt-20 lg:pt-32" id="home  ">
        <div className="container section  lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="">
              
              <h1 className="text-4xl font-extrabold">Avez-vous un projet?S'il vous plait laissez tomber un message</h1>
                <p>Entrez en contact et laissez-moi savoir comment je peut vous aider.Remplissez 
                le formulaire et je serais en contact dès que possible.
                </p>
                <p>&emsp;</p>
              <dl>
               <dt><strong>Adress:</strong></dt>
              <dd>Q:Himbi1 Av:De Goma N°110 Ville de Goma</dd>
              <p>&emsp;</p>
              <dt><strong>Phone:</strong></dt>
              <dd>+243993676906</dd>
              <p>+243906329177</p>
               <p>&emsp;</p>    
              <dt><strong>Email:</strong></dt>
              <dd>jkasongo288@gmail.com</dd> 
              </dl>
              <img src="/images/cont.jpeg"className="w-ful"/>
          </div>
          <div className="h-[450px] bg-white rounded-lg p-1 shadow-md">
            <h1><b>Name</b></h1>
            <div className="bg-gray-200 rounded-lg p-1">&emsp; eg.Josue Kasongo</div>
            <p>&emsp;</p>
            <h1><b>Email</b></h1>
            <div className="bg-gray-200 rounded-lg p-1">&emsp; eg.jkasongo288@gmail.com</div>
            <p>&emsp;</p>
            <h1><b>Phone</b></h1>
            <div className="bg-gray-200 rounded-lg p-1">&emsp; Phone Number</div>
            <p>&emsp;</p>
            <h1><b>Message</b></h1>
            <div className="bg-gray-200 rounded-lg p-8 "><ul><li className="text-clip"> écrire un message</li></ul></div>
            <p>&emsp;</p>
            <div className="bg-black rounded-lg p-2 "><h1 className="text-white text-center">ENVOYER</h1></div>


          </div>
        </div>
      </section>
    )
  }
  
  export default Contact