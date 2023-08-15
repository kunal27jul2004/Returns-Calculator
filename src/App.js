import {useState} from "react";
import Header from "./component/Header/Header"
import InvestmentDetailsInput from "./component/InvestmentDetailsInput/InvestmentDetailsInput"
import ReturnsList from "./component/returns-list/ReturnsList";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const yearlyDataChangeHandler = (userInput) => {
    setYearlyData(prevData => [...userInput]);
  };

  return (
    <div>
      <Header />
      <InvestmentDetailsInput onDataFetch={yearlyDataChangeHandler}/>
      <ReturnsList yearlyData={yearlyData}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  );
}

export default App;
