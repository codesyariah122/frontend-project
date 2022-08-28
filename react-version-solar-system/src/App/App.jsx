import React, {useState} from 'react'
import './App.scss';
import {Cat, Sky, Sun, Clouds, Stars, Moon, Mountain, Hill, Land, Trees} from './components'

const App = () => {
  const options = [
    {id: 1, data: 'dusk', dataclass: 'time dusk', name: 'Dusk'},
    {id: 2, data: 'day', dataclass: 'time day', name: 'Day'},
    {id: 3, data: 'sunset', dataclass: 'time sunset', name: 'Sunset'},
    {id: 4, data: 'night', dataclass: 'time night', name: 'Night'}
  ];
  const [active, setActive] = useState(false)
  const [time, setTime] = useState(null)

  const activeOption = (e) => {
    let type = e.target.dataset.option
    setTimeout(() => {
      switch(type){
        case "day":
        setActive(true)
        setTime('time day')
        break;
        case "sunset":
        setActive(true)
        setTime('time sunset')
        break;
        case "night":
        setActive(true)
        setTime('time night')
        break;
        case "dusk":
        setActive(true)
        setTime('time dusk')
        break;
      }
    }, 1000)
  }

  const handleActive = (className, id) => {
    if(time === className) {
      document.querySelector('.option').classList.remove('first')
      return 'option active'
    }else if(id === 1){
      return 'option first'
    }else{
      return 'option'
    }
  }

  return (
    <div className="App">
      <div className="main-content">
        <h1>Change your favorite time of the day</h1>
        <div className="window">
          <div className="cat">
            <Cat/>
          </div>

          {/*Ilustration*/}
          <div className="illustration">
            <div className={active ? time : "time dusk"}>
              {/*Sky*/}
              <div className="sky">
                <Sky/>
              </div>

              {/*Sun*/}
              <div className="sun">
                <Sun/>
              </div>

              {/*Clouds*/}
              <div className="clouds">
                <Clouds/>
              </div>

              {/*Stars*/}
              <div className="stars">
                <Stars/>
              </div>

              {/*Moon*/}
              <div className="moon">
                <Moon/>
              </div>

              {/*mountain*/}
              <div className="mountain">
                <Mountain/>
              </div>

              {/*hill*/}
              <div className="hill">
                <Hill/>
              </div>

              {/*hill*/}
              <div className="land">
                <Land/>
              </div>

              {/*trees*/}
              <div className="trees">
                <Trees/>
              </div>

            </div>
          </div>
        </div>

        <div className="option-wrapper">
          {
            options.map((d, idx) => (
              <div onClick={activeOption} className={handleActive(d.dataclass, d.id)} data-option={d.data} key={d.id}>{d.name}</div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App;
