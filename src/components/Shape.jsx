const Shape = () => {
    return (
      <section className=" pt-20 lg:pt-32" id="home z-10">
        <div className="container section items-center lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="h-[320px] bg-gray-300 rounded-lg p-1">
            <div className="bg-white h-full rounded-lg p-4">
            <h1><b>Etudes et formations</b></h1> 
              <dl>
                <dt><strong>Ecole Primaire MAUA</strong></dt>
                <dd><sub>Ecole Primaire &emsp;&emsp;2013-2018</sub></dd>
                <dt><strong>Ecole du Cinquantenaire</strong></dt>
                <dd><sub>Electronique &emsp;&emsp;2018-2023</sub></dd>
                <dt><strong>Universte Libre des Pays des Grands-Lacs</strong></dt>
                <dd><sub>Genie informatique &emsp;&emsp;2023 à nos jours</sub></dd>
                <dt><strong>Autodidacte</strong></dt>
                <dd><sub>Arduino &emsp;&emsp;2021</sub></dd>
                <dt><strong>Autodidacte</strong></dt>
                <dd><sub>HTml et CSS &emsp;&emsp;2024</sub></dd>
               </dl>
            </div> 
          </div>
          <div className=" bg-white rounded-lg p-2">
          <div className=" bg-gray-100  rounded-lg p-4 mb-5">
            <h1><b>Frameworks et Languages</b></h1>
            <img src="/images/pic.png"className="w-ful"/>
          </div>
          <div className=" bg-gray-100 rounded-lg p-4 mt-4">
            <h1><b>Experience Professionnel</b></h1>
            <p>Nous avons déjà eu a travailler sur quelques projets personnel mais aussi
              nous avons une connaissance poussé en vitrine,nous avons déjà eu a plaquer
              quelques maisons.
            </p>
          </div>   
          </div>
        </div>
      </section>
    )
  }
  
  export default Shape