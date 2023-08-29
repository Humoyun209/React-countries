import List from "../components/List";
import Controls from "../components/Controls";
import axios from "axios";

import { SearchContext } from "../context/searchContext";
import { Fragment, useContext, useEffect, useState } from "react";

import { searchByCountry, ALL_COUNTRIES, filterByRegion } from "../config";

const HomePage = () => {
    const [countries, setCountries] = useState([]);

    const { search, region } = useContext(SearchContext);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    useEffect(() => {
        if (region) {
            axios
                .get(filterByRegion(region.value))
                .then(({ data }) => setCountries(data));
        }

        if (search) {
            axios
                .get(searchByCountry(search))
                .then(({ data }) => setCountries(data));
        }

        if (!search && !region.value) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, [search, region.value]);

    return (
        <Fragment>
            <Controls />
            <List countries={countries} />;
        </Fragment>
    );
};

export default HomePage;
