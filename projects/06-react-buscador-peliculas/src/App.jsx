import './App.css'
import { Movies } from "./components/Movies.jsx"
import {useMovies} from "./hooks/useMovies.js"
import { useEffect, useRef, useState} from 'react'

function App() {

    // const webApi = ''
    // const apiKey = '5cabb81c'
  const { movies:mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({query})

    //OTRA MANERA PARA QUE HAGA UN ARRAY DE TODOS LOS IMPUTS ES:
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setQuery(newQuery)
    
    if (newQuery == ''){
      setError('La búsqueda está vacía')
      return
    }
    if(newQuery.match(/^\d+$/)){
      setError('No se puede buscar pelis con sólo números')
      return
    }
    if(newQuery.length<3){
      setError('Por favor alarge el número de caracteres en la búsqueda')
      return
    }
    setError(null)
  }
  
  useEffect(() =>{

  }, [query])

  return (
    <div className='page'>
      <h1>Prueba técnica</h1>
      <header>
        <h1>Aquí irán las películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Advenger, start wars...' />
          <button>
            Buscar
          </button>
        </form>
        {error && <p className='error' style={{color:'red'}}>{error}</p>}
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
