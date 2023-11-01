import { useState, useEffect  } from 'react'
import "./Home.css";
import { createClient } from '@supabase/supabase-js'
import asesoramientop2 from './asesoramientop2.jpg';
import nosotros from './nosotros.jpg';
import contacto from './contacto.jpg';
import portada from './portada.jpg';
import automaticoia from './automaticoia.jpg';




const Home = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, 
                              import.meta.env.VITE_APP_SUPABASE_ANON_KEY);



  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
     
      if (email!="") {
        const { error } = await supabase
        .from('Interesados')
        .insert({ Correo: email})
      }
        

    } catch (error) {
        console.error(error);
        alert('No se registro');
    }


  };

  useEffect(() => {

    
       
    }, []);

  
  return (

    <form onSubmit={handleSubmit}>
    <div>

    <div className="card3">
        <h1>IAM</h1>
        <h4>Bienvenido a la app de GERENCIA AGIL, sea una empresa de triple impacto y gane dinero en el proceso</h4>
        </div>

      <div className="logo-container">
        <img src={portada} className="App-logo" alt="logo" />
        
        </div>
        
        <main>
        

        <section id="Nosotros">
        <div className="card">
            
            <h3>{"Nosotros"}</h3>
            <img src={nosotros} className="App-logo2" alt="logo"/>
            <div className="card2">
            <h3>{"Quienes somos "}</h3>
            <p>{"Somos una organización dedicada a desarrollar planes que optimicen los recursos y se tenga una responsabilidad social. Creemos que el desarrollo sostenible y la responsabilidad social van de la mano. Por eso, nos esforzamos por crear planes que sean rentables para nuestros clientes, pero que también sean sostenibles y respetuosos con el medio ambiente."}</p>
            </div>
            <div className="card2">
            <h3>{"Misión"}</h3>
            <p>{"Nuestra misión es proporcionar asesoramiento de alta calidad a nuestros clientes para que logren aprovechar sus recursos y residuos de forma que impacten en sus finanzas, genere bienestar a sus comunidades e impacte positivamente el ambiente."}</p>
            </div>
            <div className="card2">
            <h3>{"Visión"}</h3>
            <p>{"Nuestra visión es convertirnos en el líder en consultoría, ofreciendo soluciones innovadoras y sostenibles para las empresas y organizaciones que buscan mejorar su optimizar sus recursos mientras mejoran a su vez el impacto social y ambiental. Queremos ser reconocidos por nuestra capacidad para entender las necesidades específicas de cada cliente y desarrollar planes personalizados que se adapten a sus objetivos y presupuestos."}</p>
            </div>

            
          </div>
          </section>

          <section id="Serv">

          <div className="card">

          <h3>{"Servicios"}</h3>


          <div className="container">
          
        
              <div className="card4">
              <img src={automaticoia} className="App-logo1" alt="logo"/>
              <div className="link">
              <a  href="/#listaE"> Desarrollo automatizado </a>
              <p>{"Realiza con ia planes sobre gestión de residuos y gestión energética"}</p>
              </div>
              </div>

              <div className="card4">
              <img src={asesoramientop2} className="App-logo1" alt="logo"/>
              <div className="link">
              <a  href="/#Contacto"> Asesoramiento personalizado </a>
              <p>{"Implementa planes de gestión de residuos y gestión energética"}</p>
              </div>
              </div>
              

            
            </div>

            </div>
          
        </section>

        <section id="Contacto">
        <div className="card">
            
            <h3>{"Contacto"}</h3>
            <img src={contacto} className="App-logo2" alt="logo"/>
            <div className="card3">
            <h3>{"Numeros de contacto"}</h3>
            <p>{"En construcción 1"}</p>
            </div>
            <div className="card3">
            <h3>{"Correo"}</h3>
            <p>{"En construcción 2"}</p>
            </div>
            <div className="card3">
            <h3>{"Redes"}</h3>
            <p>{"En construcción 3"}</p>
            </div>

            
          </div>

          </section>

          

          <section id="listaE"> 

            <div className="card">
            
            <h3>{"Lista de espera para usar la inteligencia artificial de IAM"}</h3>
            <label>
            Correo electrónico:
            <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <div className="card5">
            <button className="boton" type="submit">Enviar</button  >
            </div>
            
          </div>
          </section>
          



    
      </main>
      
      </div>
    
    </form>
  );
};

export default Home;