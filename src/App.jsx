import './App.css'
import CateringService from './components/CateringService/CateringService'
import Gallery from './components/Gallery/Gallery'
import MarriageService from './components/MarriageService/MarriageService'
import Card from './components/service/Card'
import CardGrid from './components/service/CardGrid'
import Service from './components/service/Service'

function App() {

  return (
    <>
    
     <Service/>
    <CardGrid/>
    <Gallery/>

    <CateringService/>
    <MarriageService/>

    </>
  )
}

export default App
