const BASE_URL ='https://restcountries.com/v2/'

export const ALL_COUNTRIES = BASE_URL + 'all/'

export const searchByCountry = (country) => (BASE_URL + 'name/' + country)

export const filterByRegion = (region) => (BASE_URL + 'region/' + region)

export const getCountriesByCodes = (codes) => (BASE_URL + 'alpha?codes=' + codes.join())