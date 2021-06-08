
const Book = (props) => {

  return (<div>
      <h1 className='title'>{props.title}</h1>
      <h2 className='author'>{props.author}</h2>
  </div>)

}

export default Book;