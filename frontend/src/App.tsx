import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BoatingPage } from './pages/BoatingPage'
import { AccommodationPage } from './pages/AccommodationPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/accommodation/1-bhk"
          element={<AccommodationPage type="1 BHK" />}
        />
        <Route
          path="/accommodation/2-bhk"
          element={<AccommodationPage type="2 BHK" />}
        />
        <Route path="/boating" element={<BoatingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
