import './App.css'
import hero from './assets/hero.png'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Produtos'

const App = () => {
  return (
    <div className="app">
      
      <Header/>
      
      <Products/>
      
      <Categories/>
      
      <Footer/>
      
      <Hero/>
      
      <Benefits/>
      

    </div>
  )
}

export default App
