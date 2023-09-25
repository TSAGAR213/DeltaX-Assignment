import React from 'react'
import "./Songs.css"
import StarRating from './Star'

function Songstable() {
  return <div id='table-container'>
    <div id='heading'>
    <h2 id='headsongs'>Top 10 Songs</h2>
    <div id='songadd'>+ Add song</div>
    </div>
    <table id='table'>
        <thead>
            <tr>
         <th className='th'>Artwork</th>
         <th className='th'>Song</th>
         <th className='th'>Date of Release</th>
         <th className='th'>Artists</th>
         <th className='th'>Rating</th>
         </tr>
        </thead>
        <tbody>
            
        <tr>
        <td className='td'>Artwork</td>
         <td className='td'>Song</td>
         <td className='td'>Date of Release</td>
         <td className='td'>Artists</td>
         <td className='td'><StarRating/></td>  
        </tr>

        <tr>
        <td className='td'>Artwork</td>
         <td className='td'>Song</td>
         <td className='td'>Date of Release</td>
         <td className='td'>Artists</td>
         <td className='td'><StarRating/></td>  
        </tr>

        
        </tbody>
    </table>

  </div>
  
}

export default Songstable