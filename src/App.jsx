import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export const App = () => {
  const user = [
    {

      name: 'Miguel Ángel Duran',
      userName: 'midudev',
      initialIsFollowing: true
    },
    {

      name: 'Binance',
      userName: 'binance',
      initialIsFollowing: true
    },
    {

      name: 'CryptoYoda',
      userName: 'CryptoYodaGuru',
      initialIsFollowing: false
    },
    {

      name: 'CNN en Español',
      userName: 'CNNEE',
      initialIsFollowing: false
    }
  ]

  return (
    <>
      <h5 className="tw-followCard-info">A quién seguir</h5>
      <section className="App">
        {
          user.map(({ name, userName, initialIsFollowing }) => (
            <TwitterFollowCard key={userName} name={name} userName={userName} initialIsFollowing={initialIsFollowing} />
          )
          )
        }

      </section>
    </>
  )
}
