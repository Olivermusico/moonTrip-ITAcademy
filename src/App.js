import './App.css';
import Book from "./Book";
import booksData from './booksData'
import Header from './Header'

function App(){ 
const bookComponents = booksData.map( book =><Book key={book.id} title={book.title} author={book.author} />)

    return (
      <div>
        <div className="nav">
          <Header />
        </div>
        <div className="content">{bookComponents}</div>
      </div>
    );

};


export default App;
