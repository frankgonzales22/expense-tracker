import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Display } from './Components/Display'
import { FilterDisplay } from './Components/FilterDisplay'

function App() {
  const [items, setItems] = useState([
    { id: 1, desc: "Milk", amount: 5, category: "Groceries" },
    { id: 2, desc: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, desc: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, desc: "Movies", amount: 5, category: "Entertainment" }
  ])

  return (
    <>


      <div className="mb-3">
        <FilterDisplay  onSelect={(category) => console.log(category)} />
      </div>

      {items &&
        <Display
          item={items}
          onRemove={(id) => setItems(items.filter(item => item.id !== id))}
        />}
    </>
  )
}

export default App

// description, amount, category

// add item
// display item
