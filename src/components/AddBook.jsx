import { useState } from "react";
import { Link } from "react-router-dom";

const AddBook = () => {
  

    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        published_year: '',
        genre: '',
        description: ''
      });

   
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
        ...formValues,
        [name]: value
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault()

        for (const [key, value] of Object.entries(formValues)) {
            if (value == "") {
                alert(`${key} field is empty`)
                return
            }
        }


        const payload = {
        
            title: formValues.title,
            author: formValues.author,
            published_year: Number(formValues.published_year),
            genre: formValues.genre,
            description: formValues.description
                
        }

        console.log(payload)

        if(isNaN(payload.published_year)){
            alert('PUBLISHED_YEAR recived an invalid input')
        } else {
            fetch(`http://localhost:8000/api/books`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                
            
            })
        
            .then(() => {
                
                alert(`The book is successfully added`)
                window.location.href = `/`
            })
            .catch(err => console.log(err))
        }
    }
   
    return (
        <>
        
       
        <div className="w-screen h-screen flex justify-center items-center flex-col">
       
        <form className="w-[550px] p-7 bg-slate-800 drop-shadow-lg rounded-lg">
        <h1 className="text-white text-center font-bold text-5xl mb-16">Add Book</h1>
            {
                Object.keys(formValues).map((item, index) => {
                    return <label key={index} className="input input-bordered flex items-center mb-2">
                        <p className="text-yellow-300">{Object.keys(formValues)[index].toUpperCase()} </p> 
                        <input type="text" name={item} onChange={handleChange} className="grow ml-3" placeholder={`Enter book ${item}`}/>
                    </label>
                })
            }

            <button onClick={handleSubmit} className="w-full btn btn-warning mt-10">Add Book</button>
            <Link className="w-full" to={"/"}>
                <button className="btn w-full mt-2 btn-success">Homepage</button>
            </Link>
            
        </form>
        </div>
        </>
    )
}

export default AddBook
