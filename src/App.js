import './App.css';

import TimerComp from './TimerComp';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* .............ff happy hacking ff............... */}

          <TimerComp />

          {/* .............bottom............... */}

          <p>
            Boxing timer <code>choose intervals in secods</code>
          </p>

          <p>
            <i>
              Happy sweating!
              <ul className="bullet-points">
                <li>quick ducks</li>
                <li>switch feet while sharp attacks</li>
                <li>warm up and train short bursts a few times</li>
                <li>focus on few things and repeat till sharpness</li>
              </ul>
            </i>
          </p>
          <a
            // href="https://www.notion.so/WHo-or-what-do-you-want-to-spend-your-time-on-Contemplate-When-in-doubt-nap-it-out-4c70e8d4b08a42ceb41a7a21b8575fd7?p=d171fd63d9bd4e10b7bf631023d0f7f0&pm=c"
            className="App-link"
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000/ Homepage
          </a>
          <a
            className="App-link"
            href="https://www.notion.so/WHo-or-what-do-you-want-to-spend-your-time-on-Contemplate-When-in-doubt-nap-it-out-4c70e8d4b08a42ceb41a7a21b8575fd7?p=d171fd63d9bd4e10b7bf631023d0f7f0&pm=c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes Code journal NOTION
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
