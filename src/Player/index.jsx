import './style.sass'
import '../style/responsive.sass'
import {  artists  } from '../assets/db/artists'
import { useState } from 'react'
import { useEffect } from 'react'

export function Player(){

  const [play, setPlay] = useState(false)
  const [timeEnd, setTimeEnd] = useState(0)
  const [timeMusic, setTimeMusic] = useState(0)
  const [second, setSeconds] = useState(0)
  const [minute, setMinutes] = useState(0)

  function changeSelectPlay(){
    setPlay(true)
  }

  function changeSelectPause(){
    setPlay(false)
  }

 useEffect(() => {
  if(timeEnd < `${artists.minutes}`){
    if(play){
      setTimeout(() => {
        setTimeEnd(timeEnd +1)
      }, 1000);

      setTimeout(() => {
        setSeconds(second +1)
      }, 1000);

    }
  }else{
    setPlay(false)
  }
 })

 useEffect(() => {
  if(second >= 60) {
    setSeconds(1)
    setMinutes(minute+1)
  }
 })

 useEffect(() => {
  if(timeMusic < 99){
    if(timeEnd >= 1){
      setTimeMusic((100/`${artists.minutes}`) + timeMusic)
    }
  }else{
    setPlay(false)
  }

 }, [timeEnd])

 console.log('tempo da musica: ' + timeMusic)


console.log('contador' + ': ' + timeEnd)
  return(
    <div className="container">
      <div className="container-player">
        <div className="music-artist">
          <img src={artists.picture} alt="" />
          <div className="artist-content">
            <h1 className="name-music">{artists.artist}</h1>
            <h2 className="name-artist">{artists.music}</h2>
          </div>
        </div>
        <div className="controls-music">
          <div className="back-music">
            <div className='back-one'></div>
            <div className='back-two'></div>
          </div>
          <div className="play-music-control">
            <div className="play-music">
              <div className={play ? 'visible-button' : 'play'} onClick={changeSelectPlay}></div>
              <div className={play ? 'pause' : 'visible-button'} onClick={changeSelectPause}>
                <div className='pause-one'></div>
                <div className='pause-two'></div>
            </div>
            </div>

          </div>
          <div className="next-music">
            <div className='next-one'></div>
            <div className='next-two'></div>
          </div>
        </div>
        <div className="music-progress">
          <div className="progress-bar">
            <div className="progress-bar-initial"></div>
            <div className="progress-bar-end" style={{width: timeMusic+'%'}}></div>
          </div>
          <div className="time-music">
            <span className='time-music'>{minute}:{second}</span>
            <span className='time-music-end'>03:20</span>
          </div>
        </div>
      </div>
    </div>
  )
}
