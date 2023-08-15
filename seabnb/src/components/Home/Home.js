import logo from '../../logo.png';
import StaysList from '../Stays/Stays';

export default function Home() {
    return(
      <div>
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
              <p>
                Seabnb
              </p>
          </header>
        </div>
        <StaysList />
      </div>
    );
  };
  