import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilter
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}