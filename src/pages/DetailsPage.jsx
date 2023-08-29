import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchByCountry } from "../config"
import axios from "axios"
import { Container } from "../components/Container"
import Info from "../components/Info"
import { Button } from "../components/Button"


const DetailsPage = () => {
    const {name} = useParams()
    const [country, setCountry] = useState('')
    useEffect(() => {
       axios( searchByCountry(name)).then(({data}) => setCountry(data[0]))
    }, [name])
  return (
    <Container>
      <Button style={{marginTop: '50px', padding: '5px 20px'}}>To Back</Button>
      <Info
        name={country.name}
        nativeName={country.nativeName}
        flag={country.flag}
        capital={country.capital}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        topLevelDomain={country.topLevelDomain}
        currencies={country.currencies}
        languages={country.languages}
        borders={country.borders}
      />
    </Container>
  )
}

export default DetailsPage