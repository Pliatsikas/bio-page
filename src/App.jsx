import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import BioPage from './pages/BioPage'
import ProjectsPage from './pages/ProjectsPage'
import CertificatesPage from './pages/CertificatesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
