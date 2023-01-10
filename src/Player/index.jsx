import './style.sass'
import {  artists  } from '../assets/db/artists'


export function Player(){
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
          <div className="play-music">

          </div>
          <div className="next-music">
            <div className='next-one'></div>
            <div className='next-two'></div>
          </div>
        </div>
        <div className="music-progress">
          <div className="progress-bar">
            <div className="progress-bar-initial"></div>
            <div className="progress-bar-end"></div>
          </div>
          <div className="time-music">
            <span className='time-music'>03:20</span>
            <span className='time-music-end'>00:14</span>
          </div>
        </div>
      </div>
    </div>
  )
}
