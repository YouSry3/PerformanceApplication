import { useState } from "react";
import Products from "./Components/Products";
import { CardsApi } from "./Data";
import Button from "./Components/ui/Button";
import ChartComponent from "./Components/ChartComponent";




function App() {

  const [count, setCount] = useState(0);


  return (
    <>
      <div className="Charge m-10">
        
        <Button className="bg-green-600" width="w-fit" onClick={() => setCount(count + 10)}>
          Recharge
        </Button>

        <ChartComponent value={count} />

      </div>

      <hr />

      <p className="p-4">Here are some products:</p>

      <Products CardsApi={CardsApi}  />
    </>
  );
}

export default App;
