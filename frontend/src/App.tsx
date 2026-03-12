import { useState } from 'react'
import './App.css'
//import TodoList from './pages/todolist'
import TodoForm from './pages/todoform'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <h1>ToDo</h1>
        <nav>
          <ul>
            <li>Nova Tarefa</li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<TodoForm />} />
          <Route path='/new' element={<TodoForm />} />
          
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
