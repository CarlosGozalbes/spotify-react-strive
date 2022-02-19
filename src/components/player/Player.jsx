import './player.css'
import { Container, Image } from 'react-bootstrap'
import {
  BsShuffle,
  BsSkipStartFill,
  BsFillPlayCircleFill,
  BsSkipEndFill,
  BsArrowRepeat,
  BsVolumeUpFill,
  BsHeart,
  BsCast,
} from "react-icons/bs";

const Player = () => {
    return (
      <Container
        fluid
        className="player-container d-flex justify-content-between"
      >
        <div className="player-song-info d-flex">
          <Image
            src="https://i.pravatar.cc/60"
            style={{ width: 70, height: 70 }}
            className="align-self-center"
          ></Image>
          <div className="align-self-center ml-3">
            <p className="text-white mb-0">song title</p>
            <p className=" text-left player-info-author">author</p>
          </div>
          <div className="align-self-center mb-3">
            <BsHeart className="player-icon-info ml-3" />
            <BsCast className="player-icon-info ml-3" />
          </div>
        </div>
        <div className="mx-auto my-3">
          <div className="player-options pb-4">
            <BsShuffle className="player-icon mr-4" />
            <BsSkipStartFill className="player-icon mr-4" />
            <BsFillPlayCircleFill className="player-icon play-pause mr-4" />
            <BsSkipEndFill className="player-icon mr-4" />
            <BsArrowRepeat className="player-icon" />
          </div>
          <div className="player-progres">
            <span className="player-time mr-3 align-top">0.00</span>
            <input type="range" className="player-progress-bar" />
            <span className="player-time ml-3 align-top">0.00</span>
          </div>
        </div>
        <div className="player-volume align-self-center pr-4">
          <BsVolumeUpFill className="player-icon mr-1 align-top" />
          <input type="range" className="player-volume-bar " />
        </div>
      </Container>
    );
}

export default Player