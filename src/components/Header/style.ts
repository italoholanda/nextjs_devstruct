import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: 6rem;

  display: flex;
  align-items: center;

  background: var(--white);
  border-bottom: var(--grey-100) 1px solid;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: transparent;
  background: transparent;

  cursor: pointer;
`
