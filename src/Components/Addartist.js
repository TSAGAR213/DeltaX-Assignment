import React from "react";
import "./artistadd.css";

const MODAL_STYLES = {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000
  }
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

function Addartist({show,close}) {
    if(show)
    {
        return  <>
        <div style={OVERLAY_STYLES}/>
            <div id="artist-form" style={MODAL_STYLES}>
              <div id="container">
                <h2 id="adr">Add Artist</h2>
                <h2 
                id="x"
                onClick={close}
                >X</h2>
              </div>
              <hr />
              <div id="art-container">
                <form>
                  <div id="artname-container" className="margin-left">
                    <label htmlFor="artname">Artist Name</label>
                    <input id="artname" type="text" />
                  </div>
        
                  <div id="dob-container" className="margin-left">
                    <label htmlFor="dob">Date of Birth</label>
                    <input id="dob" type="date" />
                  </div>
        
                  <div id="bio-container" className="margin-left">
                    <label htmlFor="bio">Bio</label>
                    <input id="bio" type="text" />
                  </div>
        
                  <div id="all-btns">
                    <button 
                    className="empty" 
                    id="can"
                    onClick={close}
                    >
                      Cancel
                    </button>
                    <button className="empty" id="done" type="submit">
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </>
          
    }
    else
    {
        return null
    }
  
}

export default Addartist;
