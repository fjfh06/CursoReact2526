import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './components/NotFound'
//import Saludo y About con lazy loading
const About = lazy(() => import('./components/About'));
const Saludo = lazy(() => import('./components/Saludo'));

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Header />
      <main className='max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200 min-h-[500px]'>
        <Suspense fallback={<h2>Cargando la app</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/saludo/:nombre' element={<Saludo />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App