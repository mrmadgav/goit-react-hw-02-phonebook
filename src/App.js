import React from "react";
import "modern-normalize/modern-normalize.css";
import Phone from "./components/Phone/Phone.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Phone />
      </Provider>
    </>
  );
};
export default App;
