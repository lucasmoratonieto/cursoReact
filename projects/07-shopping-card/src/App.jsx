import {products as initialProducts} from './mocks/products.json'
import { useContext, useState } from 'react' 
import { Products } from './components/Products'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import { Filters } from './components/Filters'
import { FiltersContext } from './context/filters.jsx'


function useFilters (){

  const {filters, setFilter} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product =>{
      return(
        product.price >= filters.minPrice &&
        (
          filters.category ==  'all' ||
          product.category == filters.category 
        )
      )
    })
  }

  return{ filters, filterProducts, setFilter }
}


function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts, setFilter} = useFilters()
  const filteredProducts = filterProducts(products)

  return(
    <main>
      <Header>
        <Filters onChange={setFilter}/>
      </Header>
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>

    </main>
  )
}

export default App
