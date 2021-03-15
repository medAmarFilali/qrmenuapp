import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import { CssBaseline } from "@material-ui/core";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);
