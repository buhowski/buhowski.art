import affProLogoWithoutText from '../../../assets/svg/affpro-logo-without-text.svg';
import affproAnimation from '../../../assets/animations/affpro/affpro-animation.json';
import moneyAnimation from '../../../assets/animations/affpro/money-animation.json';
import robotAnimation from '../../../assets/animations/affpro/robot-animation.json';
import jackpotAnimation from '../../../assets/animations/affpro/jackpot-animation.json';
import { ReactSVG } from 'react-svg';

export const tickerElements = [
  {
    id: 1,
    title: 
    <div className='affpro__animation-svg'>
      <ReactSVG
        src={affProLogoWithoutText}
        wrapper='span'
        style={{
          height: '30px',
			    width: `100px`,
        }}  
      />
    </div>,
    animation: affproAnimation,
  },
  {
    id: 2,
    title: 'Affiliate networking',
    animation: moneyAnimation,
  },
  {
    id: 3,
    title: 'iGaming',
    animation: robotAnimation,
  },
  {
    id: 4,
    title: 'Affiliate networking',
    animation: jackpotAnimation,
  },
  {
    id: 5,
    title: 
    <div className='affpro__animation-svg'>
      <ReactSVG
        src={affProLogoWithoutText}
        wrapper='span'
        style={{
          height: '30px',
			    width: `100px`,
        }}  
      />
    </div>,
    animation: affproAnimation,
  },
  {
    id: 6,
    title: 'Affiliate networking',
    animation: moneyAnimation,
  },
  {
    id: 7,
    title: 'iGaming',
    animation: robotAnimation,
  },
  {
    id: 8,
    title: 'Affiliate networking',
    animation: jackpotAnimation,
  },
  {
    id: 9,
    title: 
    <div className='affpro__animation-svg'>
      <ReactSVG
        src={affProLogoWithoutText}
        wrapper='span'
        style={{
          height: '30px',
			    width: `100px`,
        }}  
      />
    </div>,
    animation: affproAnimation,
  },
  {
    id: 10,
    title: 'Affiliate networking',
    animation: moneyAnimation,
  },
  {
    id: 11,
    title: 'iGaming',
    animation: robotAnimation,
  },
  {
    id: 12,
    title: 'Affiliate networking',
    animation: jackpotAnimation,
  }
]
