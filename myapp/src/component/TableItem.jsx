import "./TableItem.css";
import displayimage from "./images/dummy.jpg";

export const TableItem = ({ data, deleteData }) => {
  return (
    <div className="TableItemclass">
      <div>
        <img src={data.file || displayimage} alt="displayimage"></img>
      </div>
      <div>
        <p>Name:{data.Name}</p>
        <p>ingrdient:{data.Ingredient}</p>
        <p>time: {data.Time}</p>
        <p>desription:{data.Description}</p>
      </div>
    </div>
  );
};
