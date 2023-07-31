import "./Main.css";
import Main from "./Main";
function App() {
  const expenses = [
    {
      id: "e1125412",
      title: "ddd",
      amount: 882,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "hhh",
      amount: 582,
      date: new Date(2020, 3, 8),
    },

    {
      id: "e3",
      title: "ggg",
      amount: 552,
      date: new Date(2023, 2, 2),
    },

    {
      id: "e4",
      title: "uuu",
      amount: 586,
      date: new Date(2021, 2, 5),
    },
  ];

  return (
    <div className="App">
      <Main
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Main
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Main
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Main
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
