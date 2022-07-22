import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <p>I'm the homepage</p>
      <p>
        <Link to="1234">Go to event</Link>
      </p>
    </section>
  )
}
