import styled from 'styled-components';
import { useState, useEffect, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMoon, IoMoonOutline, IoSunny, IoSunnyOutline } from 'react-icons/io5';

import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
`;

const Title = styled(Link)`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleHandler = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
   document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <Fragment>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Title to='/'>Where in the world</Title>
            <ModeSwitcher onClick={toggleHandler}>
              {theme === 'light' ? (<IoSunnyOutline size='16px'/>) : (<IoMoonOutline size='16px'/>)}
              <span style={{marginLeft: '5px'}}>{theme} mode</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderEl>
      <Outlet />
    </Fragment>
  )
}

export default Header