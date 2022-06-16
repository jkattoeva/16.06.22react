import { useSelector } from "react-redux";

function CounterDisplays() {

  const counter = useSelector();


  return (
    <h1 className="CounterDisplays">{counter}</h1>
  );
}

export default CounterDisplays;