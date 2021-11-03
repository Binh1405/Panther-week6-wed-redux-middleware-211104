import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import newsAction from "./redux/actions/newsAction";

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleCount = () => {
    // setCount(count + 1);
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };
  //action: object, take the type of action, info together with that type(optional)

  const data = useSelector((state) => state.news.allNews)
  console.log("data", data)
  const isLoading = useSelector((state) => state.news.isLoading)
  console.log("loading", isLoading)
  
  useEffect(() => {
    dispatch(newsAction.getAllNews())
  }, [])
 
  
  return (
    <div className="App">
      <button onClick={handleCount}>I have been clicked {count} times</button>
      <button onClick={handleDecrease}>don't click me </button>
      {
        isLoading || data.length===0? <h1> Loading...</h1> : data.articles.map((article) => <p> {article.title} </p>)
      }
    </div>
  );
}

export default App;
