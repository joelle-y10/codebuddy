import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './state/AuthContext'
import { Shell } from './components/Shell'
import { HomePage } from './pages/HomePage'
import { LearnIndexPage } from './pages/LearnIndexPage'
import { UniversityIndexPage } from './pages/UniversityIndexPage'
import { TrackPage } from './pages/TrackPage'
import { LessonPage } from './pages/LessonPage'
import { AccountPage } from './pages/AccountPage'

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnIndexPage />} />
            <Route path="/learn/:lang" element={<TrackPage tier="basic" />} />
            <Route path="/learn/:lang/:lessonId" element={<LessonPage tier="basic" />} />
            <Route path="/university" element={<UniversityIndexPage />} />
            <Route path="/university/:lang" element={<TrackPage tier="university" />} />
            <Route path="/university/:lang/:lessonId" element={<LessonPage tier="university" />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Shell>
      </HashRouter>
    </AuthProvider>
  )
}
