import React from 'react'
import InfoCard from '../../components/infocard/InfoCard'
import '../infoCards/InfoCards.scss'

const InfoCards = () => {
  return (
    <div className="infoCardsContainer">
        <InfoCard title="June Expenditure:" body="$3525" footer="Last Month: $4568" accentColor="green"/>
        <InfoCard title="Budget Target:" body="$10000" footer="You are 60% below your targeted budget" accentColor="green"/>
        <InfoCard title="Your largest expense this month was:" body="Food" footer="You spent the least on: Clothing" accentColor="green"/>
        <InfoCard title="test" body="this is a test card" footer="This is a test footer" accentColor="green"/>
    </div>
  )
}

export default InfoCards