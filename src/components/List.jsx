import styled from 'styled-components';
import Card from './Card';
import axios from 'axios';
import { ALL_COUNTRIES, filterByRegion, searchByCountry } from '../config';
import { useEffect, useState } from 'react';
import { Container } from './Container';

import { useContext } from 'react';

import { SearchContext } from '../context/searchContext';


const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;


const List = ({countries}) => {
  

  return (
    <Container>
      <Wrapper>
        {countries && countries.map((elem, index) => (
          <Card 
            toPage={`/countries/${elem.name}`}
            key={index} 
            name={elem.name}
            flag_url={elem.flags.png}
            info={
              [
                {
                  name: 'region',
                  value: elem.region
                },
                {
                  name: 'capital',
                  value: elem.capital
                },
                {
                  name: 'population',
                  value: elem.population.toLocaleString()
                }
              ]
            }
          />
        )) }
      </Wrapper>
    </Container>
  )
}

export default List