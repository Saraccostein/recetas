import { useState } from 'react'
import './App.css'

import cookiesImg from './assets/cookies.jpg'
import coffeeImg from './assets/espresso_tonic.png'
import quesadillasImg from './assets/quesadillas.jpg'

function App() {

  const recetas = [
    {
      id: "Nestle Toll House Cookies",
      icono: "🍪",
      imagen: cookiesImg,
      ingredientes: [
        "2 1/4 tazas de harina",
        "1 tsp bicarbonato",
        "1 tsp sal",
        "1 taza (2 barras) mantequilla suave",
        "3/4 taza azúcar",
        "3/4 taza azúcar morena",
        "1 tsp vainilla",
        "2 huevos",
        "2 tazas chispas"
      ],
      procedimiento: [
        "Precalentar el horno a 19°C (375°F)",
        "Combinar harina, bicarbonato y sal en un plato pequeño.",
        "Mezclar la mantequilla, azücar, azücar morena y vainilla en una batidora hasta que esté cremoso.",
        "Agregar un huevo a la vez.",
        "Gradualmente, anadir la combinación de harina.",
        "Agregar las chispas.",
        "Colocar cucharadas de la masa en una charola sin engrasar.",
        "Hornear durante 9-11 min o hasta que esten de un color café dorado.",
        "Dejar enfriar por 2 min en las charolas y quitarlas para enfriar completamente."
      ]
    },
    {
      id: "Café tónico",
      icono: "☕",
      imagen: coffeeImg,
      ingredientes: [
        "100 mm café de filtro frío",
        "100 mm agua tónica",
        "3 cubos de hielo",
        "1 vaso de 300 mm"
      ],
      procedimiento: [
        "Hacer en una jarra 100 mm de café de filtro frío.",
        "Poner 3 cubos de hielo en el vaso y vertir 100 mm de tónica.",
        "Vaciar los 100 mm de café frío encima de la tónica. Se puede adornar con rodajas de limón o naranja."
      ]
    },
    {
      id: "Quesadillas",
      icono: "🧀",
      imagen: quesadillasImg,
      ingredientes: [
        "Tortillas de harina o maíz (de su preferencia)",
        "Queso (de su preferencia)"
      ],
      procedimiento: [
        "Poner a calentar un comal sobre la estufa.",
        "Colocar la cantidad de tortillas sobre el comal que desee.",
        "Calentar un poco las tortillas, Io suficiente para que esten blandas.",
        "Colocar queso, sea rallado o en rebanadas, sobre tortilla y doblarla por mitad.",
        "Esperar a que el queso se derrita, y dependiendo de preferencias personales, si la quesadilla queda blandita o dorada, es el tiempo que se conserva sobre el comal."
      ]
    }]

  const [recetaActiva, setRecetaActiva] = useState(recetas[0].id);
  const recetaSeleccionada = recetas.find(
    (receta) => receta.id === recetaActiva
  );

  return (
    <main>
      <header>
      </header>

      <nav>
        <ul className='nav-menu'>
          {recetas.map((receta, index) => (
            <li key={index}
              id={receta.id}
              onClick={() => setRecetaActiva(receta.id)}
              className={recetaActiva === receta.id ? "activo" : ""}
            >
              {receta.icono}
            </li>
          ))}
        </ul>

        <h2><spam>Recetario </spam> &gt; {recetaSeleccionada.id}</h2>
      </nav>

      <section id="listas">
        <article id="ingredientes">

          <div>
            <img src={recetaSeleccionada.imagen} alt={recetaSeleccionada.id} />
          </div>

          <div>
            <h3>Ingredientes</h3>
            <ul>
              {recetaSeleccionada.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </div>
        </article>

        <article id="procedimiento">
          <h3>Procedimiento</h3>
          <ol>
            {recetaSeleccionada.procedimiento.map((etapa, index) => (
              <li key={index}>{etapa}</li>
            ))}
          </ol></article>
      </section>
    </main>
  )


}

export default App
