import React from 'react'
import "./Artist.css"

function Artist() {
  return  <div id='artist-container'>
  
  <h2 id='art-heading'>Top 10 Artists</h2>
  
  <table id='artist-table'>
      <thead>
          <tr>
       <th className='th-artist'>Artists</th>
       <th className='th-artist'>Date of Birth</th>
       <th className='th-artist'>Songs</th>
       </tr>
      </thead>

      <tbody> 
      <tr>
      <td className='td-artist'>Artists</td>
       <td className='td-artist'>Date of Birth</td>
       <td className='td-artist'>Songs</td>
      </tr>
      </tbody>
  </table>

</div>
  
}

export default Artist