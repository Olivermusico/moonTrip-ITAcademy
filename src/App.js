import './App.css';
import Book from "./Book";
import booksData from './booksData'

function App(){ 
const bookComponents = booksData.map( book =><Book title={book.title} author={book.author} />)

    return ( 

        <div> 
          {bookComponents}
        </div> 

      );

};


export default App;
