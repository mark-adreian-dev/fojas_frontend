import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState();
  const { BookID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/books/${BookID}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setBook(response));
  }, [BookID]);

  if (!book) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/books/${id}`, { method: "DELETE"})
    .then(response => response.json())
    .then(response => {
        alert(`The Book "${response.data}" was Removed successfully`)
        window.location.href = '/'
    })
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-white font-bold text-7xl mb-16">Book details</h1>
      <div className="card bg-base-300 text-white w-96 scale-125">
        <div className="p-8">
          <h2 className="card-title mb-0 text-2xl">{book.title} </h2>
          <h3 className="italic mb-7">{book.author} {book.published_year}</h3>
          <p className="mb-5 text-xs">{book.description}</p>
          <p className="mb-5 text-xs italic">Genre: {book.genre}</p>
          <div className="card-actions justify-end">
            <Link className=" w-full" to={`/books/${book.id}/edit`}><button className="btn w-full btn-warning">Edit</button></Link>
            <button onClick={() => handleDelete(book.id)} className="btn w-full btn-error">Delete</button>
            <Link className="w-full" to={"/"}>
                <button className="btn w-full mt-2 btn-success">Homepage</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
