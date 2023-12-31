import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles : {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      border: 'none',
      padding: '0.25px',
      boxShadow: 'var(--shadow)',
      height: '50px'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--color-ui-base)' ,
      cursor: 'pointer'
    })
  }
}
)`
  width: 250px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }

  @media (max-width: 767px) {
    margin-bottom: 0;
    width: 100%;
  }
`;