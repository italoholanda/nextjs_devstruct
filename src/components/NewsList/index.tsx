import NewsItem from 'components/NewsItem'
import * as Styled from './style'
import posts from 'utils/posts.json'

const NewsList = () => {
  return (
    <Styled.List>
      <div className="container">
        {posts.map((post, index) => {
          return (
            <NewsItem
              thumb={post.thumb}
              text={post.text}
              stack={post.stack}
              color={post.color}
              key={index}
            />
          )
        })}
      </div>
    </Styled.List>
  )
}

export default NewsList
