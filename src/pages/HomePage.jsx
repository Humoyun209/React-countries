import List from "../components/List";
import Controls from "../components/Controls";
import axios from "axios";

import { SearchContext } from "../context/searchContext";
import { Fragment, useContext, useEffect, useState } from "react";

import { searchByCountry, ALL_COUNTRIES, filterByRegion } from "../config";

const HomePage = ({countries, setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, []);

    // const { search, region } = useContext(SearchContext);

    const handleSearch = (search, region) => {
        let data = [...countries]
        
        console.log(countries);

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        setFilteredCountries(data)

    }

    // useEffect(() => {
    //     if (region) {
    //         axios
    //             .get(filterByRegion(region.value))
    //             .then(({ data }) => setCountries(data));
    //     }

    //     if (search) {
    //         axios
    //             .get(searchByCountry(search))
    //             .then(({ data }) => setCountries(data));
    //     }
    // }, [search, region.value]);

    return (
        <Fragment>
            <Controls onFilter={handleSearch} countries={countries}/>
            <List countries={ filteredCountries } />
        </Fragment>
    );
};

export default HomePage;
