import "./App.css";
import Home from "./Components/Home";
import Quality from "./Components/Quality";

import ProductCard from "./Components/ProductCard";
import Purchase from "./Components/Purchase";
import MapComponent from "./Components/MapComponent";
import Review from "./Components/Review";

function App() {
  return (
    <div>
      <Home />
      <Quality />
      <ProductCard />
      <Purchase />

      <Review />

      <MapComponent />
    </div>
  );
}

export default App;
