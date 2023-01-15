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

  const [hoursMusic, setHoursMusic] = useState(0)
  const [minutesMusic, setMinutesMusic] = useState(0)
  const [secondsMusic, setSecondsMusic] = useState(0)
  const [timeMusicView, setTimeMusicView] = useState('')

  const [idArtist, setIdArtist] = useState(0)

  console.log(timeEnd)

  function changeSelectPlay(){
    setPlay(true)

  }

  function changeSelectPause(){
    setPlay(false)
  }

  function nextMusicPlay(){
    if(idArtist >= artists.length-1){
      setIdArtist(0)
      if(play){
        setPlay(false)
      }
    }else{
      if(idArtist >= 0) {
        setIdArtist(idArtist +1)
        if(play){
          setPlay(false)

        }
      }
    }
  }

  function backMusicPlay(){
    if(idArtist <= 0){
      setIdArtist(0)
    }else{
      if(idArtist >= 0) {
        setIdArtist(idArtist -1)
        if(play){
          setPlay(false)
        }

      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setTimeMusic(0)
      setSeconds(0)
      setMinutes(0)
      setTimeEnd(0)
    }, 1000);

    setTimeout(() => {
      setPlay(true)
    }, 2000);

  }, [idArtist])

 useEffect(() => {
  if(timeEnd < `${artists[idArtist].minutes}`){
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
      setTimeMusic((100/`${artists[idArtist].minutes}`) + timeMusic)
    }
  }else{
    setPlay(false)
  }

 }, [timeEnd])

 useEffect(() => {

  setHoursMusic(parseInt(artists[idArtist].minutes/3600))
  setMinutesMusic(parseInt((artists[idArtist].minutes%3600) / 60))
  setSecondsMusic(parseInt((artists[idArtist].minutes%3600) % 60))

  if(artists.minutes >= 3600){
    setTimeMusicView(`${hoursMusic}:${minutesMusic}:${secondsMusic}`)
  }else{
    setTimeMusicView(`${minutesMusic}:${secondsMusic}`)
  }

 })

  return(
    <div className="container">
      <div className="container-player">
        <div className="music-artist">
          <img src={artists[idArtist].picture} alt="" />
          <div className="artist-content">
            <h1 className="name-music">{artists[idArtist].artist}</h1>
            <h2 className="name-artist">{artists[idArtist].music}</h2>
          </div>
        </div>
        <div className="controls-music">
          <div className="back-music" onClick={backMusicPlay}>
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
          <div className="next-music" onClick={nextMusicPlay}>
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
            <span className='time-music-end'>{timeMusicView}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
