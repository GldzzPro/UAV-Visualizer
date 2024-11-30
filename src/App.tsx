import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Story from './components/Story'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Story />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App