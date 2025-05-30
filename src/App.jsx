import './App.css'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import Skill from './components/Skill.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const skillList = ['Html', 'CSS', 'Python'];

  return (
    <>
        <Header />
      <Profile />
      <Skill title="🛠️ Skills" skills={skillList} />

      <Footer />
    </>
  )
}

export default App
