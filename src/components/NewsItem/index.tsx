import * as Styled from './style'

interface Props {
  thumb: string
  text: string
  stack: string
  color: string
}

const NewsList = ({ thumb, text, stack, color }: Props) => {
  return (
    <Styled.List>
      <Styled.Content>
        <Styled.Stack color={color}>
          <i /> <strong>{stack}</strong>
        </Styled.Stack>

        <h2>{text}</h2>
      </Styled.Content>

      <Styled.Thumb>
        <img src={thumb} />
      </Styled.Thumb>
    </Styled.List>
  )
}

export default NewsList
