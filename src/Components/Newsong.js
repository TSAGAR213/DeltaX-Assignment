import React, { useState } from "react";
import Navbar from "./Navbar";
import "./newsong.css";
import Selection from "./Selection";
import Addartist from "./Addartist";

function Newsong() {
  let [show, setShow] = useState(false);
  return (
    <div id="newsong-contain">
      <Navbar />
      <div id="form-contain">
        <h2 id="hsong">Adding new Song</h2>
        <form>
          <div id="song-contain">
            <label htmlFor="songname">Song Name</label>
            <input id="songname" type="text" />
          </div>

          <div id="date-contain">
            <label htmlFor="date-release">Date-Release</label>
            <input id="date-release" type="text" />
          </div>

          <div id="image-contain">
            <span>ArtWork</span>
            <label id="cover-label" htmlFor="cover-image">
              Upload Image
              <input id="cover-image" type="file" />
            </label>
          </div>

          <div id="artists-contain">
            <label htmlFor="artists">Artists</label>
            <div id="dropdown-conatiner">
              <Selection />
            </div>
            <span 
            id="add-artist"
            onClick={()=>{
              setShow(true)
            }}
            >+ Add Artist</span>
          </div>

          <Addartist show={show} close={()=>{setShow(false)}}/>

          <div id="buttons-contain">
            <button id="cancel-button">
              <span>Cancel</span>
            </button>

            <button id="submit-button" type="submit">
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsong;
