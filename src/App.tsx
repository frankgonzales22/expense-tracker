import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Display } from './Components/Display'

function App() {
  const [items, setItems] = useState([
    {
      id : 1,
      desc: "Milk",
      amount: 5,
      category: "groceries"
    },
    {
      id : 2,
      desc: "Eggs",
      amount: 10,
      category: "groceries"
    },
    {
      id : 3,
      desc: "Electricity",
      amount: 100,
      category: "utilities"
    },
    {
      id : 4,
      desc: "Movies",
      amount: 5,
      category: "entertainment"
    }
  ])

  return (
    <>
      {items && <Display item={items} onRemove={(id)=>setItems(items.filter(item => item.id !== id))}/>}
    </>
  )
}

export default App

// description, amount, category

// add item
// display item
