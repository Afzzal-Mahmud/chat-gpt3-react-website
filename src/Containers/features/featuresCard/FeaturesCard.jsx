import React from 'react'
import './featuresCard.css';
import Feature from '../../../components/feature/Feature'

const FeaturesCard = (props) => {
    const {title,text} = props.featureObject
    console.log(title+"from card")
  return (
    <div className="gpt3__features-container_card">
      <Feature heading={title}/>
      <p>{text}</p>
   </div>
  )
}

export default FeaturesCard;