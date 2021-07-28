import Head from 'next/head'
import MediaLeft from '../components/utills/media.left/media.left'
import Domaines from '../components/utills/domaines/domaines'
import Caroussel from '../components/caroussel'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>INGÉNIEUR INFORMATIQUE</title>
        <meta name="description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        {
          /* Lien font googlr */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://princenickballo.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="INGÉNIEUR INFORMATIQUE" />
        <meta property="og:description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        <meta property="og:image" content="/images/preview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="princenickballo.fr" />
        <meta property="twitter:url" content="https://princenickballo.fr/" />
        <meta name="twitter:title" content="INGÉNIEUR INFORMATIQUE" />
        <meta name="twitter:description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        <meta name="twitter:image" content="/images/preview.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

      </Head>


      <div className="index LayoutVerticalœ">

        <MediaLeft />

        <div className="ml50">

          <div className="one">
            <Caroussel />
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

          <div className="three">
            <div className="container">
              <div className="head">
                <h3>DES SITES WEB RESPONSIVES ADAPTÉES À TOUT TYPES D'INTERFACE</h3>
              </div>
              <Image className="img" alt="img" src="/images/screen.png" layout="fill" />
            </div>
            
          </div>
          <div className="competencesT">
              <h1>Mes compétences techniques</h1>
              <div className="competencesTC orientationH ">
                
                <div className="items">
                  <p>HTML</p>
                  <div class="container">
                    <div class="skills html">90%</div>
                  </div>

                  <p>CSS</p>
                  <div class="container">
                    <div class="skills css">90%</div>
                  </div>

                  <p>JavaScript</p>
                  <div class="container">
                    <div class="skills js">95%</div>
                  </div>

                  <p>PHP</p>
                  <div class="container">
                    <div class="skills php">60%</div>
                  </div>
                  <p>Python</p>
                  <div class="container">
                    <div class="skills python">60%</div>
                  </div>

                  <p>C</p>
                  <div class="container">
                    <div class="skills next">90%</div>
                  </div>

                  <p>Matlab</p>
                  <div class="container">
                    <div class="skills matlab">60%</div>
                  </div>
                </div>

                <div className="items">
                  <p>Next.js</p>
                  <div class="container">
                    <div class="skills next">80%</div>
                  </div>

                  <p>React.js</p>
                  <div class="container">
                    <div class="skills react">80%</div>
                  </div>

                  <p>Node.js</p>
                  <div class="container">
                    <div class="skills node">85%</div>
                  </div>

                  <p>Android Studio</p>
                  <div class="container">
                    <div class="skills android">75%</div>
                  </div>

                  <div className="database">
                    <div className="mysql"></div>
                    <div className="mongo"></div>
                    <div className="postgre"></div>
                    <div className="aws"></div>
                  </div>
                </div>

              </div>
          </div>

          <div className="four">
            <div className="portfolio">
              <h1>MES PROJETS</h1>
              <div className="projets">

                <div className="projet">
                  <div>
                    <div className="img my-app"></div>
                    <div className="desc">
                      <div className="title">
                        Mon site web
                      </div>
                      <div className="stack ">
                        <div>Next.js </div>
                        <div>HTML</div>
                        <div>SCSS </div>
                        <div>JavaScript</div>
                      
                      </div>
                    </div>
                  </div>
                  <div className="description">
                      Il s'agit de cette page que vous consultez. Je l'ai réalisé avec le framework Next.js 
                      avec les langages comme le HTML , le CSS , le JavaScript et en utilisant les outils de photoshop
                    </div>
                </div>
                  
                <div className="projet">
                  <div>
                    <div className="img  ga-eilco"></div>
                    <div className="desc">
                      <div className="title">
                        GA-EILCO
                      </div>
                      <div className="stack ">
                        <div>React.js {"&"} Node.js</div>
                        <div>HTML</div>
                        <div>CSS </div>
                        <div>JavaScript</div>
                        <div> Mysql </div>
                      </div>
                    </div>
                    </div>
                    <div className="description">
                      A la tête d'une équipe de developpeur , il fallait developpé un outil centralisé, du système de gestion des absences d'une université .
                    </div>
                  </div>

                  <div className="projet">
                  <div>
                    <div className="img  auth"></div>
                    <div className="desc">
                      <div className="title">
                        Google - Facebook authentification
                      </div>
                      <div className="stack ">
                        <div>React.js {"&"} Node.js</div>
                        <div>HTML</div>
                        <div>CSS </div>
                        <div>JavaScript</div>
                        <div> Mysql </div>
                        <div> Google auth api </div>
                        <div> Facebook auth api </div>
                      </div>
                    </div>
                    </div>
                    <div className="description">
                      Il est question ici d'une application permettant de s'authentifier en utilisant son compte google ou facebook.
                    </div>
                  </div>
                  <div className="projet">
                    <div>
                      <div className="img  covid"></div>
                        <div className="desc">
                          <div className="title">
                            Gestion de cas COVID en entreprise
                          </div>
                          <div className="stack ">
                            <div>React.js {"&"} Node.js</div>
                            <div>HTML</div>
                            <div>CSS </div>
                            <div>JavaScript</div>
                            <div> Mysql </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="description">
                        C'est une application pour le suivi de l'évolution de la covid-19 au sein d'une entreprise et de la gestion du personnel.
                      </div>

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
