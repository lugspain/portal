import { Routes, Route } from 'react-router-dom'
import Home from 'routes/Home/Home'
import Event from 'routes/Event/Event'
import { MainStyled } from './MainStyled'

const Main = () => (
  <MainStyled>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="event/:event" element={<Event />} />
    </Routes>
  </MainStyled>
)

export default Main
