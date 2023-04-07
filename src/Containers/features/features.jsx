import React, {useState,useEffect} from 'react'
import './features.css'

import axios from 'axios'
import FeaturesParagraphLong from './featuresFn'
import FeaturesCard from './featuresCard/FeaturesCard'

function Features() {
  const [featuresData,setFeaturesData] = useState([])

  useEffect(() =>{
    const url = 'https://afzzal-mahmud.github.io/gpt3Features.json/featursData.json';

    const fetchFeaturs = async () =>{
      const { data }  = await axios.get(url)
      setFeaturesData(data)
    }
    fetchFeaturs()
  },[])

  return (
    <div className="gpt3__features section__padding" id="features">
    
        <div className="gpt3__features-heading_content">
          <p className='gpt3__features-heading_content-subheading'>You Can Request Early Access to Get Started !</p>
          <h1 className="gradient__text">The Future is Now and You Just Need to Realize It.Step into Future Today. & Make it Happen.</h1>
          <p className='gpt3__features-heading_text'>
            {/* a long paragraph,therefore I store it on a function */}
            <FeaturesParagraphLong/>
          </p>
        </div>

        <div className="gpt3__features-container">
          {/* a card imporve the code readability */}
          {
            featuresData.map(feature => <FeaturesCard
                             key={feature.id}
                             featureObject={feature}>
                             </FeaturesCard>)
          }

        </div>
        
    </div>
  )
}

export default Features