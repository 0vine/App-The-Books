import { useState } from "react"
import "./NavBar.scss"
// import { DataBooks } from "../../../data/database"


export const NavBar = ({bookList, listBook, setBookList}) => {



    const filter = (filterBook) => {
        
        const filtro = bookList.filter(book => book.Category === filterBook)
     
        setBookList(filtro)
        

    }


    const filterPrice2 = (priceFilter) => {
         const filtro = bookList.filter(book => book.Price <= priceFilter)

         setBookList(filtro)
    }

    const filterPrice = (priceFilter) => {
        const filtro = bookList.filter(book => book.Price >= priceFilter)

        setBookList(filtro)
   }


    const cleanFilter = () => {
        setBookList(bookList) 
    }

    const searchBook = (nameSearch) => {
        const filtro = bookList.filter(book => book.Name === nameSearch)

        setBookList(filtro)
    }

 

    return (
        <>
            <div className="div-main2">


                <div className="div-pesquisa">
                    <input type="text"  onChange={(e) => searchBook(e.target.value)} placeholder="Pesquisar ..." />
                    <button onClick={()=> searchBook("")}>P</button>
                </div>
                <div className="div-categoria">
                    <h4>Filtrar por categoria</h4>
                    <a onClick={() => filter("Ação")}>Ação</a>
                    <a onClick={() => filter("Fantasia")} >Fantasia</a>
                    <a onClick={() => filter("Romance")}>Romance</a>
                </div>
                <div className="div-filtroPreço">
                    <h4>Filtrar por preço</h4>
                    <p>Minimo R$</p>
                    <input type="number" onChange={(e) => filterPrice(e.target.value)} placeholder="25"/>
                    <p>Máximo R$</p>
                    <input type="number" onChange={(e) => filterPrice2(e.target.value)} placeholder="100"/>

                    <button onClick={cleanFilter}>Limpar filtro</button>
                </div>
            </div>
        </>
    )
}