import React from 'react';
import KeratonVideo from './KeratonVideo';
import KeratonMap from './KeratonMap';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonGames from './KeratonGames';
import KeratonFAQ from './KeratonFAQ';
import KeratonVendors from './KeratonVendors';
import KeratonSponsors from './KeratonSponsors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function Keraton() {
  return (
    <div>
      <Link to={{ pathname: "https://keraton.vercel.app/" }} target="_blank">Click to open (new tab)</Link>
    </div>
  );
}


// {/* <KeratonVideo></KeratonVideo>
//       {/* <KeratonHeader></KeratonHeader> */}
//       <KeratonAbout></KeratonAbout>
//       <KeratonMap></KeratonMap>
//       <KeratonPerformers></KeratonPerformers>
//       <KeratonVendors></KeratonVendors>
//       {/* <KeratonGames></KeratonGames> */}
//       <KeratonFAQ></KeratonFAQ>
//       <KeratonSponsors></KeratonSponsors> */}

// function ScrollToTop() {
//     const [backToTop, setBacckToTop] = useState(false);

//     const toggleBackToTop = () => {
//         if (window.pageYOffset > 300) {
//             setBackToTop(true);
//         } else {
//             setBackToTop(false);
//         }
//     };

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         })
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', toggleBackToTop);

//         return () => {
//             window.addEventListener('scroll', toggleBackToTop);
//         }
//     }, []);

//     return (
//         <div className="" style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
//             <a onClick={scrollToTop} className={`${backToTop ? 'visible' : 'invisible'}`}>
//                 <FaArrowUp className="back-to-top" style={{ fontSize: `calc(1.2vw + 20px)` }} />
//             </a>
//         </div>
//     );
// }

export default Keraton;
