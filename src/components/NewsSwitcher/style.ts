import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6rem;

  width: 100%;
  height: 4.5rem;

  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  background: var(--white);

  &,
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  border-bottom: var(--grey-100) 1px solid;
`
