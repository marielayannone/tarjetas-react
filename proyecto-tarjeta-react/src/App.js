//import Estados from "./componenetes/Estado/Estados"//
import Tarjeta from "./componenetes/tarjeta/Tarjeta"


function App() {
  const datos = [{
    "id": 1,
    "producto": "Elvive",
    "descripcion":"Acondicionador Elvive Hidra Hialurónico x 400 ml",
    "precio": "$978",
    "imagen": "https://farmacityar.vteximg.com.br/arquivos/ids/228355-600-600/221682_acondicionador-elvive-hidra-hialuronico-x-400-ml_imagen-1.jpg?v=637986818818970000"
  },
  {
    "id": 2,
    "producto": "Elvive",
    "descripcion": "Shampoo Elvive Hidra Hialurónico x 400 ml",
    "precio": "$975",
    "imagen":"https://farmacityar.vteximg.com.br/arquivos/ids/228352-600-600/221679_shampoo-elvive-hidra-hialuronico-x-400-ml_imagen-1.jpg?v=637986815594830000" 
  },
  {
    "id": 3,
    "producto":"Elvive",
    "descripcion":"Combo Elvive Shampoo + Acondicionador + Tratamiento Capilar x 300 ml",
    "precio": "$2025",
    "imagen": "https://farmacityar.vteximg.com.br/arquivos/ids/230763-600-600/224403_combo-elvive-hidra-hialuronico-shampoo-mas-acondicionador-mas-mascarilla_imagen-1.jpg?v=638025598475630000"
  },
  {
    "id": 4,
    "producto": "Dove",
    "descripcion": "Jabón en Barra Dove Antibacterial x 90 g",
    "precio": "$290",
    "imagen": "https://farmacityar.vteximg.com.br/arquivos/ids/202689-600-600/217257_jabon-en-barra-dove-antibacterial-x-90-g_imagen-1.jpg?v=637345014196930000"
  },
  {
    "id": 5,
    "producto": "Protex",
    "descripcion":"Jabón en Barra Protex Pro Regeneración x 80 g",
    "precio": "$201",
    "imagen": "https://farmacityar.vteximg.com.br/arquivos/ids/223721-600-600/227566_jabon-en-barra-protex-pro-regeneracion-x-80-g_imagen-1.jpg?v=637901197117800000"
  },
  {
    "id": 6,
    "producto": "Rexona",
    "descripcion": "Jabón Rexona de Glicerina Granada x 3 un x 90 g",
    "precio": "$642",
    "imagen": "https://farmacityar.vteximg.com.br/arquivos/ids/227065-260-260/210109_jabon-de-glicerina-rexona-granada-3-un-x-90-gr_imagen-1.jpg?v=637963550473970000"
  }

  ]

  return (
   
   <div className="lista">
      { 
         datos.map(producto => {
          return <Tarjeta producto={producto} />
        })
      } 
 
   </div>
    
  );
}

export default App;

 