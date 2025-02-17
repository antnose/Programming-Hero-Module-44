import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CustomNav from "./Components/CustomNav/CustomNav";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./Components/LineChart/LineChart";

function App() {
  return (
    <>
      <CustomNav />
      {/* <Navbar /> */}
      <PriceOptions />
      <LineChart />
    </>
  );
}

export default App;
