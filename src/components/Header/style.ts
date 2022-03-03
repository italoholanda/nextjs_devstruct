import styled from 'styled-components'

interface Props {
  scrollPosition: number
}

export const Header = styled.header<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: ${(props) => (props.scrollPosition < 64 ? '6rem' : '4rem')};
  transition: height 0.2s;

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
