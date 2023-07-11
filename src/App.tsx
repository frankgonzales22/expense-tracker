import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Display } from './Components/Display'

function App() {
  const items = [
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
  ]

  return (
    <>
      <Display item={items} onRemove={(a)=> console.log(a)}/>
    </>
  )
}

export default App

// description, amount, category

// add item
// display item
