import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { JobProvider, SavedJobsProvider } from "./context/JobContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JobProvider>
          <SavedJobsProvider>
            <App />
          </SavedJobsProvider>
        </JobProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
