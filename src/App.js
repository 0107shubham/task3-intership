import "./App.css";
import Home from "./Components/Home";
import Quality from "./Components/Quality";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
function App() {
  return (
    <div>
      {/* <Header className="absolute top-0 bg-transparent" /> */}
      <Home />
      <Quality />
      <ProductCard />
    </div>
  );
}

export default App;
