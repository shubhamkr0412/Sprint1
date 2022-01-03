import { useEffect, useState } from "react";
import displayimage from "./images/dummy.jpg";
export const Form = ({ GetFormData }) => {
  useEffect(() => {
    fetch("http://localhost:3001/forms")
      .then((e) => e.json())
      .then((e) => GetFormData(e));
  }, []);
  const [form, setForm] = useState({
    Name: "",
    Ingridient: "",
    Time: "",
    Description: "",
  });
  const 
 /* const handleChange=(e)=>{
    const{value,name}=e.target;
    setForm({
      ...form,[name]: e.target.type==="c"
    })
  }*/
  const handleSubmit=(e)=>{

    fetch("http://localhost:3000/forms",
    {method:"POST",
  body: JSON.stringify(form),
headers:{"content-Type":"application/json"},
}).then(()=>fetchdata());
  };
  c
  const fetchData=()=>{
    fetch("http://localhost:3000/forms")
    .then((e)=>e.json())
    .then((e)=>GetFormData(e));
  };
  return (
    <>
      <img
        src={form.file || displayimage}
        alt="displayimage"
        style={{ width: "200px", borderRadius: "50%" }}
      ></img>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
         
          type="text"
          name="Name"
          placeholder="Enter Recipe"
        ></input>
        <label>Ingredient:</label>
        <input
          
          type="text"
          name="Ingredient"
          placeholder="Enter Ingrdients"
        ></input>
        <label>Time:</label>
        <input
      
          type="text"
          name="Time"
          placeholder="Time taken"
        ></input>
        <label>Description:</label>
        <input
        
          type="text"
          name="Description"
          placeholder="DetailRecipe"
        ></input>
      </form>
    </>
  );
};
