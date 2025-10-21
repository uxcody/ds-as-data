import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ComponentsPage from './pages/ComponentsPage'
import YAMLSpecsPage from './pages/YAMLSpecsPage'
import CodeComparisonPage from './pages/CodeComparisonPage'
import PhilosophyPage from './pages/PhilosophyPage'
import GettingStartedPage from './pages/GettingStartedPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/yaml-specs" element={<YAMLSpecsPage />} />
        <Route path="/code-comparison" element={<CodeComparisonPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
      </Routes>
    </Layout>
  )
}

export default App

