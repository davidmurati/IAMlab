import { useState, useEffect  } from 'react'
import "./Home.css";
import { createClient } from '@supabase/supabase-js'
import asesoramientop2 from './asesoramientop2.jpg';
import nosotros from './nosotros.jpg';
import contacto from './contacto.jpg';
import portada from './portada.jpg';
import automaticoia from './automaticoia.jpg';
import MultiSelect from 'multiselect-react-dropdown'





const Home = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [option, setOption] = useState('');


const [food, setfood] = useState(["A","B","C","D"
]);


const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, 
                              import.meta.env.VITE_APP_SUPABASE_ANON_KEY);



  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
     
      if (email!="" )  {
        if ( option.length!=0) {
        const { error } = await supabase
        .from('Interesados')
        .insert({ Correo: email, Alternativas: option})
        alert('Se envio la solicitud');
      }
    }
        

    } catch (error) {
        console.error(error);
        alert('No se registro');
    }


  };

  useEffect(() => {

    
       
    }, []);

     // sacar dato del selector para enviarlo con el boton que es la otra funcion 
  const find = ({ value }) => {
    
    console.log(value);
    setOption(value);
  };

  
  return (

    <form onSubmit={handleSubmit}>
    <div>
     

    <div className="card3">
        <h1>GERENCIA ÁGIL</h1>
        
        </div>


      <div className="logo-container">
        <img src={automaticoia} className="App-logo" alt="logo" />
        
        </div>
        
        <main>

          

          <section id="listaE"> 

            <div className="card">
            
            <h3>{"Lista de espera para usar la inteligencia artificial de Gerencia Ágil"}</h3>
            <label>
            Correo electrónico:
            <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            
            
            <div className="card3">
            <label>
             Opciones:
            </label>
            <p>{"Marca las opciones por la que estás interesado. (Puede ser una o varias)"}</p>
           
            <p>{"A) Indicadores de medición de la creación de valor económico, social y ambiental (no se guardarán datos)"} </p>
            <p>{"B) Según resultados obtenidos en las mediciones, podrá por un precio único bajar lista propuesta de mejoras (no se guardarán datos)"}</p>
            <p>{"C) Suscribirse a la página para mensualmente recibir un acompañamiento virtual para mejorar su creación de valor social, ambiental que mejore en la eficiencia e impacte positivamente en una reducción de la estructura de costos; guardando los datos de las mediciones, para generar propuestas personalizadas de mejora."}</p>
            <p>{"D) Servicios de acompañamiento profesional en su organización con horas de consultoría para un desempeño superior e implementación de las iniciativas de cambio para lograr un modelo de negocio sostenible."}</p>
            <p></p>
            </div>

            <div className="card6">
            <div className="selector">
            <MultiSelect
              isObject={false}
              onRemove={(event) => {
                console.log(event);
              }}
              onSelect={(event) => {
                setOption(event);
                console.log(event);
              }}
              options={food}
              
              showCheckbox
              />
      
            </div>
            </div>

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