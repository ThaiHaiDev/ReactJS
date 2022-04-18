import React from "react";
import { useEffect } from "react";
import categoryApi from "./api/categoryApi";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 2
      }
      const categoryList = await categoryApi.getAll(params)
      console.log(categoryList)
    }
  
    fetchProducts()
  }, [])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
