import React, {useState,useEffect} from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'
import axios from 'axios'

function Features() {
  const [featuresData,setFeaturesData] = useState([])

  useEffect(() =>{
    const url = 'https://afzzal-mahmud.github.io/gpt3Features.json/featursData.json';

    const fetchFeaturs = async () =>{
      const { data } = await axios.get(url)
      setFeaturesData(data)
    }
    fetchFeaturs()
  },[])

  return (
    <div className="gpt3__features section__padding" id="features">
    
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">The Future is Now and You Just Need to Realize It.Step into Future Today. & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>

        <div className="gpt3__features-container">
            <div className="gpt3__features-container_card">
                <Feature heading='Improving end distrusts instantly'/>
                <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Features