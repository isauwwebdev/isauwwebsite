import React from 'react';
import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonGames from './KeratonGames';
import KeratonFAQ from './KeratonFAQ';
import KeratonVendors from './KeratonVendors';
import KeratonSponsors from './KeratonSponsors';

function Keraton() {
  return (
    <div className="keraton">
      <KeratonVideo></KeratonVideo>
      {/* <KeratonAbout></KeratonAbout>
      <KeratonPerformers></KeratonPerformers>
      <KeratonVendors></KeratonVendors>
      <KeratonGames></KeratonGames>
      <KeratonFAQ></KeratonFAQ>
      <KeratonSponsors></KeratonSponsors> */}
    </div>
  );
}

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
