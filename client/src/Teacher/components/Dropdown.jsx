import React from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'
const Dropdown = () => {
  return (
    
<div class="dropdown">
  <button class="btn btn-info dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Computer Science</a></li>
    <li><a class="dropdown-item" href="#">Math</a></li>
  </ul>
</div>
  )
}

export default Dropdown