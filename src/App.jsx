import { IoMoon, IoSunny } from "react-icons/io5";
import { Container } from "./components/Container";
import List from "./components/List";
import Header from "./components/Header";
import { Fragment, useEffect, useState } from "react";
import Controls from "./components/Controls";
import axios from "axios";
import { ALL_COUNTRIES } from "./config";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TablePage from "./pages/TablePage";

function App() {
  // const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   axios.get(ALL_COUNTRIES).then(res => setCountries(res))
  // }, [])

  // axios.get(ALL_COUNTRIES).then(
  //   (res) => console.log(res)
  // )

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/countries/:name" element={<DetailsPage />} />
        <Route path="/table" element={<TablePage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
