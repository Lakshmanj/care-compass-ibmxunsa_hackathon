import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SplashScreen from './components/common/SplashScreen'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import SentinelHomePage from './pages/SentinelHomePage'
import './index.css' // Import global styles if needed, avoiding App.css which has default Vite centering

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <Router>
      {showSplash && (
        <SplashScreen onFinished={() => setShowSplash(false)} />
      )}
      <Header />
      <SentinelHomePage />
      <Footer />
    </Router>
  )
}

export default App
