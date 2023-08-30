import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import Search from './Search'
import { CustomSelect } from './CustomSelect';
import { Container } from './Container';
import { SearchContext } from '../context/searchContext';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({onFilter, countries}) => {
  // const {search, setSearch, region, setRegion} = useContext(SearchContext)

  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  
  useEffect(() => {
    const regionValue = region?.value || ''
    onFilter(search, regionValue)
  }, [search, region, countries])

  return (
    <Container>
      <Wrapper>
        <Search search={search} setSearch={setSearch}/>
        <CustomSelect
          placeholder='Regions...'
          options={options}
          value={region}
          onChange={setRegion}
        />
      </Wrapper>
    </Container>
  )
}

export default Controls