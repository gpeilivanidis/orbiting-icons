import BallsContainer from "./components/BallsContainer";
import CenterImgContainer from "./components/CenterImgContainer";

// images
import analytics from './assets/analytics.svg';
import calendar from './assets/calendar.svg';
import coconut from './assets/coconut.svg';
import fingerPrint from './assets/finger-print.svg';
import law from './assets/law.svg';
import logout from './assets/logout.svg';
import person from './assets/person.svg';
import plane1 from './assets/plane-1.svg';

function App() {

    const images = [
        analytics,
        calendar,
        coconut,
        fingerPrint,
        law,
        logout,
        person,
        plane1
    ];
    
  return (
    <section>

        <div className="orbiting-icons-container">

            <BallsContainer images={images} />
            
            <CenterImgContainer />
            
        </div>
        
    </section>
  );
}

export default App;
