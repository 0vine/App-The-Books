import "./SectionMainBooks.scss"
import { NavBar } from "./NavBar"
import { DivBooks } from "./DivBooks"
import { DataBooks } from "../../data/database"
import { useState } from "react"


export const SectionBook = () => {

  const [booksList, setBooksList] = useState(DataBooks)
  const [listBook, setBookList] = useState(null)
  
    return(
        <>
        <section className="section-Main">
          <div className="div-section">
           <NavBar bookList={booksList}  listBook={listBook} setBookList={setBookList}></NavBar>
           <DivBooks books={booksList} listBook={listBook} setBookList={setBookList}></DivBooks>
          </div>
        </section>
        </>
    )
}