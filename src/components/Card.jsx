import styled from 'styled-components';
import List from './List';
import { Link, useNavigate } from 'react-router-dom';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;


const Card = ( {flag_url, name, info, toPage}) => {

  return (

    <Wrapper >
      <Link style={{textDecoration: 'none', color: 'var(--color-base-ui)'}} to={toPage}>
        <CardImage src={flag_url}/>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info.map(({name, value}, index) => (
              <CardListItem key={index}>
                {name}: {value}
                </CardListItem>
            ))}
          </CardList>
        </CardBody>
      </Link>
    </Wrapper>
  )
}

export default Card