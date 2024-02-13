import './App.css'
import { Movies } from "./components/Movies.jsx"
import {useMovies} from "./hooks/useMovies.js"

function App() {

    // const webApi = ''
    // const apiKey = '5cabb81c'
  const { movies:mappedMovies } = useMovies()
    

  return (
    <div className='page'>
      <h1>Prueba técnica</h1>
      <header>
        <h1>Aquí irán las películas</h1>
        <form className='form' >
          <input placeholder='Advenger, start wars...' />
          <button onClick={()=>{
            console.log('I am a button')
          }}>
            Buscar
          </button>
        </form>
      </header>

      <main>
        {
            <ul>
              {
                <Movies movies={mappedMovies}/>
              }
            </ul>
        
        }
      </main>
    </div>
  )
}

export default App
