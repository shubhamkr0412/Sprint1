import { TableItem } from "./TableItem";
export const Table = ({ data, addData }) => {
  if (data === null) {
    return null;
  } else {
    return (
      <>
        {data.map((e, i) => {
          return <TableItem key={i} data={e} addData={addData} />;
        })}
      </>
    );
  }
};
