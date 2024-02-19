import { useState, useId } from "react"


export function Filters ({onChange}) {

    const[minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice =  (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory =  (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

     

    return(
    <section className="filterMain">
      <h2>Filters</h2>
      <div>
        <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice}/>
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categorias</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">SmartPhone</option>
            <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </section>
    )
}