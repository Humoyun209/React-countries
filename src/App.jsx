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

function App() {
    const [countries, setCountries] = useState([]);

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<HomePage countries={countries} setCountries={setCountries}/>} />
                <Route path="/countries/:name" element={<DetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
