import './App.css'

function App() {

    const webApi = ''
    const apiKey = '5cabb81c'

  return (
    <div className='page'>
      <h1>Prueba técnica</h1>
      <header>
        <h1>Aquí irán las películas</h1>
        <form className='form' >
          <input placeholder='Advenger, start wars...' />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>
    </div>
  )
}

export default App
