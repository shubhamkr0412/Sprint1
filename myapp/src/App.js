import { useState } from "react";
import "./App.css";
import { Form } from "./component/Form";
import { Table } from "./component/Table";

function App() {
  const [data, setData] = useState(null);
  const GetFormData = (receivedData) => {
    setData(recivedData);
  };
  const GetData = () => {
    fetch("http://localhost:3000/forms")
      .then((e) => e.json())
      .then((e) => setData(e));
  };
  const deleteData = (id) => {
    fetch(`http://localhost:3000/forms/${id}`, { method: "DELETE" })
      .then(() => GetData())

      .then((e) => setData(e));
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <Form GetFormData={GetFormData} />
      <Table data={data} deleteData={deleteData} />
    </div>
  );
}

export default App;
