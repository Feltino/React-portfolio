import './App.css'
import { Banner } from './components/Banner'
import { NavBar } from './components/NavBar'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MailchimpForm } from './components/MailchimpForm'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <MailchimpForm />
    </div>
  )
}

export default App
