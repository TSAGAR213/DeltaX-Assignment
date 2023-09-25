import React from 'react'
import Select from 'react-dropdown-select'

const options = [
    { 
      value: "Justin Bieber",
      label: "Justin Bieber"
    },
    {
      value:  "Playboi Carti",
      label:  "Playboi Carti"
    },
    { 
        value: "Post Malone",
        label: "Post Malone"
      },
      {
        value:  "Divine",
        label:  "Divine"
      }
  ];
function Selection() {
  return (
    <Select
    name='select'
    options={options}
    multi
    onChange={(value)=>{
         console.log(value)
    }}
    >

    </Select>
  )
}

export default Selection