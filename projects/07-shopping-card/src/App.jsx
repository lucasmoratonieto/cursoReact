import {products as initialProducts} from './mocks/products.json'
import { useState } from 'react' 
import { Products } from './components/Products'
import {Header} from './components/Header'
import { Filters } from './components/Filters'

function App() {
  const [products] = useState(initialProducts)
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })
  const filterProducts = (products) => {
    return products.filter(product =>{
      return(
        product.price >= filter.minPrice &&
        (
          filter.category ==  'all' ||
          product.category == filter.category 
        )
      )
    })
  }


  

  return(
    <main>
      <Header>
        <Filters onChange={setFilter}/>
      </Header>
    <section>
      <Products products={filterProducts(products)}/>
    </section>
    </main>
  )
}

export default App
