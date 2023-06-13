import React, { createContext } from 'react'

//init context
const DataContext = createContext()

function DataProvider(props) {
    const data = {}
  return (
    <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
