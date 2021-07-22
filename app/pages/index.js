import Head from 'next/head'
import MediaLeft from '../components/utills/media.left/media.left'
import Domaines from '../components/utills/domaines/domaines'
import Caroussel from '../components/caroussel'


export default function Home() {
  return (
    <>
      <Head>
          {/* <!-- HTML Meta Tags --> */}
          <title>INGÉNIEUR INFORMATIQUE</title>
          <meta name="description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes"/>

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://princenickballo.fr/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="INGÉNIEUR INFORMATIQUE"/>
          <meta property="og:description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes"/>
          <meta property="og:image" content="<%= require('./images/preview.png') %>"/>

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="princenickballo.fr"/>
          <meta property="twitter:url" content="https://princenickballo.fr/"/>
          <meta name="twitter:title" content="INGÉNIEUR INFORMATIQUE"/>
          <meta name="twitter:description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes"/>
          <meta name="twitter:image" content="<%= require('./images/preview.png') %>"/>

          {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

      </Head>


      <div className="index LayoutVerticalœ">

          <MediaLeft/>

          <div className="ml50">

            <div className="one"> 
              <Caroussel/>
            </div>

            <div id="ancre2" className="two center-vertical pg2"> 

              <h1>CE QUE JE PEUX FAIRE</h1>

              <span className="underlinexxs"></span>

              <div className="competences">

                <div className="competenceLeft">
                    <div className="title">
                      {"CRÉATION D'APPLICATION WEB"}
                    </div>
                    <div className="description">
                    {"  De la conception du site web, à la réalisation , en équipe ou seul. conseil sur le choix des technologies "}
                  </div>
                </div>

                <div className="competenceRight">
                    <div className="title">
                        {"SITE WEB RESPONSIVE"}
                    </div>
                    <div className="description">
                      {"  Un site web qui s'adapte à tout type d'interface. Que ce soit sur ordinateur portable , telephone mobile ou tablette."}  
                    </div> 
                </div>

                <div className="competenceLeft">
                    <div className="title">
                     {" INTÉGRATION WEB"}
                    </div>
                    <div className="description">
                      {" Integration HTML/CSS à partir d'une maquette en restant fidèle à cette dernier."}
                    </div>
                </div>

                <div className="competenceRight">
                    <div className="title">
                        {"CONCEPTION GRAPHIQUE"}
                    </div>
                    <div className="description">
                      {"Realisation de logo, flyers, plaquette publicitaire etc ..."}
                    </div> 
                </div>

              </div>

            </div>
          </div>        
      </div>

     
    </>
  )
}

{/* <Rating/>
              <div className={style.domaineContainer}>
                <Domaines
                  src="/images/data.svg"
                  title1="DATA"
                  title2="ANALYSE"
                  style={{
                    color:'#5AAAE7'
                  }}
                />
                <Domaines
                  src="/images/mobile.svg"
                  title1="DEVELOPPEMENT"
                  title2="MOBILE"
                  style={{
                    color:'#F948B4'
                  }}
                />
                <Domaines
                  src="/images/web.svg"
                  title1="DEVELOPPEMENT"
                  title2="WEB"
                  style={{
                    color:'#615DF9'
                  }}
                />
              </div>
              <div></div> */}
