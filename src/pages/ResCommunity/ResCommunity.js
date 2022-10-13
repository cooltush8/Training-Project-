import React from 'react'
import ResCommunityBackground from './Images/ResCommunityBackground.png'
import PurpleBackground from './Images/PurpleBackground.png'
import PurpleBgDesign from './Images/PurpleBgDesign.png'
import HumanPicCard from './Cards/HumanPicCard.png'
import HumanPicCardTags from './Cards/HumanPicCardTags.png'
import HumanPicCardOption from './Cards/HumanPicCardOption.png'
import CardBg from './Cards/Card1/CardBg.png'
import Card1Info from './Cards/Card1/Card1Info.png'
import Card2Logo from './Cards/Card2/Card2Logo.png'
import Card3Info from './Cards/Card3/Card3Info.png'
import Card4Info from './Cards/Card4/Card4Info.png'

import './ResCommunity.css'



const ResCommunity = React.forwardRef(({},ref) => {
  return (
    <div ref={ref}>
        <div className='ResBackground'>
        <img  className='MainResBg' src={ResCommunityBackground}/>
        </div>


        <div>
        <img  className='PurpleBackground' src={PurpleBackground}/>
        </div>


        <div>
        <img  className='PurpleBgDesign' src={PurpleBgDesign}/>
        </div>

        <div>
        <img  className='HumanPicCard' src={HumanPicCard}/>
        </div>


        <div>
        <img  className='HumanPicCardTags' src={HumanPicCardTags}/>
        
        </div>

        <div>
        <img  className='HumanPicCardOption' src={HumanPicCardOption}/>
        
        </div>


        <div>
        <img  className='CardBg1' src={CardBg}/>
        </div>

        <div>
        <img  className='CardBg2' src={CardBg}/>
        </div>
        <div>
        <img  className='CardBg3' src={CardBg}/>
        </div>
        <div>
        <img  className='CardBg4' src={CardBg}/>
        </div>

        
        <div>
        <img  className='Card1Info' src={Card1Info}/>
        </div>

        <div>
        <img  className='Card2Info' src={Card2Logo}/>
        </div>

        
        <div>
        <img  className='Card3Info' src={Card3Info}/>
        </div>



        <div>
        <img  className='Card4Info' src={Card4Info}/>
        </div>

        




        
    
    </div>
  )
}
)
export default ResCommunity