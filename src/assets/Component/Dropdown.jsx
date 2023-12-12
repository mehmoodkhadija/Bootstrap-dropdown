import React from 'react'

function Dropdown(){
  let dropdown = ["Home","About","Contact Us","Prices"];

  return(
 <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {dropdown.map(d => <li><a class="dropdown-item" href="#">{d}</a></li>)}  
  </ul>
</div>

  )
}

export default Dropdown;