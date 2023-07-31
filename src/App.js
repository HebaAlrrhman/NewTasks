import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => {
  const tableData = [
    { description: 'Item 1', quantity: 2, price: "10$", date: '2023-07-27' },
    { description: 'Item 2 ', quantity: 1, price:" 15$", date: '2023-07-28' },
    { description: 'Item 3 ', quantity: 3, price: "18$", date: '2023-07-29' },
    { description: 'Item 4 ', quantity: 5, price: "12", date: '2023-07-30' },
  ];

  return (
    <div className="HoldInvoice">
      < Header/>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <Table key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default App;
