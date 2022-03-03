import * as Styled from './style'

const Header = () => {
  return (
    <Styled.Header>
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
