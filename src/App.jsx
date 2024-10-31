
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage'
import BookDetails from "./components/BookDetails";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook"

function App() {

 
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/books/:BookID" element={<BookDetails />} />      
          <Route exact path="/books/:BookID/edit" element={<EditBook/>} />    
          <Route exact path="/books/add" element={<AddBook/>} />    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
