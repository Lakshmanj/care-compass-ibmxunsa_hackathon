import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from './components/common/SplashScreen'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import SentinelHomePage from './pages/SentinelHomePage'
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AdminPage from "./pages/AdminPage"
import AboutPage from "./pages/AboutPage"
import ResourceDetailsPage from "./pages/ResourceDetailsPage"
import BookmarkedListPage from "./pages/BookmarkedListPage"
import useAuth from "./hooks/useAuth"
import './index.css'

function AdminRoute({ children }) {
  const { isLoggedIn, isAdmin } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <Router>
      {showSplash && (
        <SplashScreen onFinished={() => setShowSplash(false)} />
      )}
      <Header />
      <Routes>
        <Route path="/" element={<SentinelHomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources/:id" element={<ResourceDetailsPage />} />
        <Route path="/BookmarkedListPage" element={<BookmarkedListPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
