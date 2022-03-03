import styled from 'styled-components'

interface Props {
  isSelected: boolean
}

export const Menu = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey-050);
  padding: 0.5rem;
  border-radius: 2rem;
`

export const Button = styled.button<Props>`
  box-shadow: ${(props) =>
    props.isSelected ? '0 0 0 1px var(--grey-100)' : 'none'};
  background: ${(props) => (props.isSelected ? 'var(--white)' : 'transparent')};

  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  transition: all 0.3s;
`
