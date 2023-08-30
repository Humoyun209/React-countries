import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { searchByCountry } from "../config"
import axios from "axios"
import { Container } from "../components/Container"
import Info from "../components/Info"
import { Button } from "../components/Button"
import { IoArrowBack } from "react-icons/io5"


const DetailsPage = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    
    const [country, setCountry] = useState('')
    useEffect(() => {
       axios( searchByCountry(name)).then(({data}) => setCountry(data[0]))
    }, [name])

    const goBack = () => navigate(-1)
  return (
    <Container>
      <Button onClick={goBack} style={{marginTop: '50px', padding: '5px 20px'}}><IoArrowBack /> Back</Button>
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