import "./App.css";
import WithAxiosComponent from "./withAxiosComponent";
import WithGraphQl from "./withGraphQl";
import WithReactQueryComponent from "./withReactQueryComponent";

function App() {
  return (
    <div>
      {/* <WithAxiosComponent /> */}
      {/* <WithReactQueryComponent /> */}
      <WithGraphQl />
    </div>
  );
}

export default App;
