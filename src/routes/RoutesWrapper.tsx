import { Routes, Route } from 'react-router-dom'
import Home from 'routes/Home/Home'
import Auth from 'routes/Auth/Auth'
import Event from 'routes/Event/Event'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Auth />} />
      <Route path="event/:event" element={<Event />} />
    </Routes>
  )
}

export default RoutesWrapper
