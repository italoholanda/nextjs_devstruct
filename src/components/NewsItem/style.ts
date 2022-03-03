interface stackProps {
  color: string
}

import styled from 'styled-components'

export const List = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 2rem;
  margin: 1rem 0;

  border-radius: 0.5rem;
  border: var(--grey-100) 1px solid;

  background: var(--white);

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 2rem;
  }
`

export const Content = styled.div`
  h2 {
    font-size: 1.5rem;
    line-height: 1.5;
    color: var(--grey-500);
  }
`

export const Stack = styled.div<stackProps>`
  color: ${(props) => props.color};
  padding: 0 0 0.5rem 0;

  strong:before {
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    background: ${(props) => props.color};
    display: inline-block;
    border-radius: 50%;
    margin-right: 0.25rem;
    margin-bottom: 0.15rem;
  }
`

export const Thumb = styled.div`
  width: 10rem;
  height: 6rem;

  border-radius: 0.5rem;

  background-color: var(--grey-300);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`
