import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import NewsPage from './views/NewsPage'
import BlogsPage from './views/BlogsPage'
import ReportsPage from './views/ReportsPage'
import NasaApod from './views/NasaApod'
import NewsDetailsPage from './views/NewsDetailsPage'
import BlogsDetailsPage from './views/BlogsDetailsPage'
import ReportsDetailsPage from './views/ReportsDetailsPage'

function App() {
  return (
    <div
      className='App font-navine h-screen w-screen 
    from-black/80 to-slate-700 text-slate-100 overflow-auto'
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewsDetailsPage />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/blogs/:id' element={<BlogsDetailsPage />} />
        <Route path='/reports' element={<ReportsPage />} />
        <Route path='/reports/:id' element={<ReportsDetailsPage />} />
        <Route path='/apod' element={<NasaApod />} />
      </Routes>
    </div>
  )
}

export default App
