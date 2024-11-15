import { useState } from 'react';
import { Form } from "./components/Form"
import './App.css'
import { Fetch } from './components/Fetch';

function App() {
  return (
    <>
    <div>
      <h1>Formulario de Colores</h1>
      <Form/>
    </div>
    <h1>imagen de gatito Fetch</h1>
    <Fetch/>
    </>
  )
}

export default App
