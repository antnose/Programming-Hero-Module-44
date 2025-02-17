import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CustomNav from "./Components/CustomNav/CustomNav";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./Components/LineChart/LineChart";
import Phones from "./Components/Phones/Phones";

function App() {
  return (
    <>
      <CustomNav />
      {/* <Navbar /> */}
      <PriceOptions />
      <LineChart />
      <Phones />
    </>
  );
}

export default App;
