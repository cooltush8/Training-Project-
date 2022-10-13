import React from 'react'
import Background from './Background.png'
import SlantGrid from './SlantGrid.png'
import MobilePhone from './MobilePhone.png'
import MobilePhoneScreen from './MobilePhoneScreen.png'
import Text1USE from './Text1USE.png'
import Text2With from './Text2With.png'
import Card1CyanColor from './Cards/Card1/Card1CyanColor.png'
import Card1Face from './Cards/Card1/Card1Face.png'
import Card1FaceBg from './Cards/Card1/Card1FaceBg.png'
import Card2YellowColor from './Cards/Card2/Card2YellowColor.png'
import Card2Face from './Cards/Card2/Card2Face.png'
import Card3PeachColor from './Cards/Card3/Card3PeachColor.png'
import Card3Face from './Cards/Card3/Card3Face.png'
import Card4ViolateColor from './Cards/Card4/Card4ViolateColor.png'
import Card4Face from './Cards/Card4/Card4Face.png'

import './Why.css'

const Why = React.forwardRef(({},ref) => {
  return (
    <div ref={ref}>
        <div className='WhyBackground'>
        <img  className='Background' src={Background}/>
        </div>

        <div className='BgGrid'>
        <div className='BgSlantGrid'>
        <img  className='SlantGrid' src={SlantGrid}/>
        </div>
        </div>


        <div className='Mobile'>
        <img  className='MobilePhone' src={MobilePhone}/>
        </div>

        <div className='MobileScreen'>
        <img  className='MobilePhoneScreen' src={MobilePhoneScreen}/>
        </div>


        <div className='Text1USE'>
        <img className='text1' src={Text1USE}/>
        </div>


        <div className='Text2With'>
        <img className='text2' src={Text2With}/>

        </div>
        
            <card1>
        <div >
            <card className='Card1'>
            <img className='Card1Cyan' src={Card1CyanColor}/>
            </card>

            <div className='CardFaceBg'>
            <img className='Card1FaceBg' src={Card1FaceBg}/>
            </div>

            <div className='CardFace'>
            <img className='Card1Face' src={Card1Face}/>

            <p className='WhyCard1tag'>SCIENTIST</p>
            <p className='WhyCard1tagSubtitle'>Promoted a build to production</p>
            </div>
        </div>
        </card1>
        


            <card2>
        <div className='Cards2'>
            <card className='Card2'>
            <img className='Card2Yellow' src={Card2YellowColor}/>
            </card>

            <div className='Card2Face'>
            <img className='Card2Face' src={Card2Face}/>
            </div>
        </div>
        </card2>


        <card3>
            <div className='Cards3'>
                <card className='Card3'>
                <img className='Card2Peach' src={Card3PeachColor}/>
                </card>

                <div className='Card3Face'>
            <img className='Card3Face' src={Card3Face}/>
            </div>

            </div>
        </card3>


        <card4>
            <div className='Cards4'>
            <card className='Card4'>
                <img className='Card4Violate' src={Card4ViolateColor}/>
                </card>


                <div className='Card4Face'>
            <img className='Card4Face' src={Card4Face}/>
            </div>

            </div>
        </card4>


    </div>
  )
}
)

export default Why;