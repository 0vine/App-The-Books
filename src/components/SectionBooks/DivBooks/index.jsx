import "./DivBooks.scss"


export const DivBooks = ({books, listBook, setBookList}) => {

    
    return(
        <>
        <div className="div-main3">
           <ul className="ul-list">
            {!listBook ?
             books.map(book => {
                return(
                    <li key={book.key} className="li-objetct">
                        <div className="div-li">
                        <h4>{book.Name}</h4>
                         <p>{book.Category}</p>
                        </div>
                         <p>R$ {book.Price}</p>

                    </li>
                )
            }) : listBook.map(book => {
                return(
                    <li key={book.key} className="li-objetct">
                        <div className="div-li">
                        <h4>{book.Name}</h4>
                         <p>{book.Category}</p>
                        </div>
                         <p>R$ {book.Price}</p>
                    </li>
                )
            }) }
            
           </ul>
        </div>
        </>
    )
}