import React  from "react";
import { useState } from "react";


function BookList() {
    const booksArray = [
        {
            id: 1,
            title: "Outliers",
            author: "Malcolm Gladwell",
            price: 400
          },
          {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            price: 471
          },
          {
            id: 3,
            title: "The Power of Now",
            author: "Eckhart Tolle",
            price: 310
          },
          {
            id: 4,
            title: "Man’s Search for Meaning",
            author: "Viktor E. Frankl",
            price: 323
          },
          {
            id: 5,
            title: "Grit",
            author: "Angela Duckworth",
            price: 266
          }
    ]

    const [books, setBooks] = useState(booksArray);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            id: books.length + 1,
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value
        }

        setBooks([...books, book]);
    }

    // display the books in table format

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" name="title" required/>
                <input type="text" placeholder="Author" name="author" required/>
                <input type="number" placeholder="Price" name="price" required/>
                <button type="submit">Add Book</button>
            </form>


        
        <div>
            <h1>Book List</h1>
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default BookList;