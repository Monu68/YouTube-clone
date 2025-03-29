import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./utils/Store";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <Provider store={store}>
      <Router> {/* ✅ Wrap your entire app inside BrowserRouter */}
        <Head />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/watch" element={<WatchPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
