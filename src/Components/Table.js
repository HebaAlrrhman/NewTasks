
import React, { useState } from 'react';

const Table = ({ rowData }) => {
    
  const [isRowHidden, setIsRowHidden] = useState(false);

  const handleButtonClick = () => {
    setIsRowHidden(!isRowHidden);
  };

  return (
    <>
      {!isRowHidden && (
       
        <tr>
          <td>{rowData.description}</td>
          <td>{rowData.quantity}</td>
          <td>{rowData.price}</td>
          <td>{rowData.date}</td>
          <td>
            <button onClick={handleButtonClick}>Hide Row</button>
          </td>
        </tr>
       

      )}
    </>
  );
};

export default Table;



