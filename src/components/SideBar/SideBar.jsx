import './sidebar.css';
import YogaIcon from "../../assets/yoga-icon.svg";
import SwimIcon from "../../assets/swimming-icon.svg";
import CyclingIcon from "../../assets/bike-icon.svg";
import DumbBellIcon from "../../assets/dumbbell-icon.svg";

function SideBar() {

  return (
    <nav className='sidebar sidebar-container'>
      <ul>
        <li>
          <a href='/'>
            <img src={YogaIcon} alt='Icône de yoga'/>
          </a>
        </li>
        <li>
          <a href='/'>
            <img src={SwimIcon} alt='Icône de natation'/>
          </a>
        </li>
        <li>
          <a href='/'>
            <img src={CyclingIcon} alt='Icône de cyclisme'/>
          </a>
        </li>
        <li>
          <a href='/'>
            <img src={DumbBellIcon} alt="Icône d'haltère"/>
          </a>
        </li>
      </ul>
      <p>Copyright, SportSee 2020</p>
    </nav>
  )
}

export default SideBar;
