import { useState } from 'react'
import { Header } from './components/Header'
import { SectionHeader } from './components/Section-Header'
import { SectionBook } from './components/SectionBooks'
import { Footer } from './components/Footer'
// COMPONENTS
import "./GlobalStyles.css"
// STYLES
import { DataBooks } from './data/database'
// DATABASE



function App() {


  return (
    <>
      <Header></Header>
      <SectionHeader></SectionHeader>
      <SectionBook books={DataBooks}></SectionBook>
      <Footer></Footer>
    </>
  )
}

export default App
