import { useState } from 'react'
import * as Styled from './style'

const SwitchMenu = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(1)

  return (
    <Styled.Menu>
      <Styled.Button
        isSelected={selectedButtonIndex === 1}
        onClick={() =>
          setSelectedButtonIndex(selectedButtonIndex === 2 ? 1 : 2)
        }
      >
        Últimos
      </Styled.Button>
      <Styled.Button
        isSelected={selectedButtonIndex === 2}
        onClick={() =>
          setSelectedButtonIndex(selectedButtonIndex === 2 ? 1 : 2)
        }
      >
        Mais lidos
      </Styled.Button>
    </Styled.Menu>
  )
}

export default SwitchMenu
