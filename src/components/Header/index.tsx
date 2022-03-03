import { useEffect, useState } from 'react'
import * as Styled from './style'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  function handleScroll() {
    setScrollPosition(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Styled.Header scrollPosition={scrollPosition}>
      <div className="container">
        <Styled.Button>
          <img src="/svg/menu.svg" alt="menu" />
        </Styled.Button>
        <Styled.Button>
          <img src="/svg/logo.svg" alt="menu" />
        </Styled.Button>
        <Styled.Button>
          <img src="/svg/search.svg" alt="menu" />
        </Styled.Button>
      </div>
    </Styled.Header>
  )
}

export default Header
