import Header from 'components/Header'
import NewsList from 'components/NewsList'
import NewsSwitcher from 'components/NewsSwitcher'

export default function Home() {
  return (
    <div>
      <Header />
      <NewsSwitcher />
      <NewsList />
    </div>
  )
}
