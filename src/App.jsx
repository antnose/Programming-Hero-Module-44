import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CustomNav from "./Components/CustomNav/CustomNav";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <CustomNav />
      {/* <Navbar /> */}
      <PriceOptions />
    </>
  );
}

export default App;
