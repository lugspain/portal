import { Routes, Route } from 'react-router-dom'
import Home from 'routes/Home/Home'
import Event from 'routes/Event/Event'

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":event" element={<Event />} />
    </Routes>
  </main>
)

export default Main
