import React from 'react'
import Background from './Images/Background.png'
import BgGrid from './Images/BgGrid.png'
import BgGrid2 from './Images/BgGrid2.png'
import PricingTitleText from './Images/PricingTitleText.png'
import PricingSubTitle from './Images/PricingSubTitle.png'
import CardBg from './Images/Cards/CardBg.png'
import PricingCardInfo from './Images/Cards/PricingCardInfo.png'


import './pricing.css'

const Pricing = React.forwardRef(({},ref) => {
  return (
    <div ref={ref}>
        <div className='PricingBackground'>
        <img  className='PriceBackground' src={Background}/>
        </div>


        <div className='BgGrid'>
        <img  className='PricingBgGrid1' src={BgGrid}/>
        <img  className='PricingBgGrid2' src={BgGrid2}/>
        </div>

        <div className='PricingTitle'>
        <img  className='PricingTitleText' src={PricingTitleText}/>
        </div>

        <div className='PricingSubTitle'>
        <img  className='PricingSubTitleText' src={PricingSubTitle}/>
        </div>


        <div>
            <card>
                <img className='PricingCardBg1' src={CardBg}/>
                <img className='PricingCardBg2' src={CardBg}/>
                <img className='PricingCardBg3' src={CardBg}/>
                <img className='PricingCardBg4' src={CardBg}/>
            </card>

            <cardInfo>
            <img className='PricingCardInfo1' src={PricingCardInfo}/>
            <img className='PricingCardInfo2' src={PricingCardInfo}/>
            <img className='PricingCardInfo3' src={PricingCardInfo}/>
            <img className='PricingCardInfo4' src={PricingCardInfo}/>

            </cardInfo>
        </div>
    </div>
  )
}
)

export default Pricing