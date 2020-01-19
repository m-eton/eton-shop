import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;

//notes:
// loading animacija dok se ucitavaju item-i
// manje kartice za mobile size
// grid layout za siroke ekrane
