import './sidebar.css';
import YogaIcon from "../../assets/yoga-icon.svg";
import SwimIcon from "../../assets/swimming-icon.svg";
import CyclingIcon from "../../assets/bike-icon.svg";
import DumbBellIcon from "../../assets/dumbbell-icon.svg";

function SideBar() {

  return (
    <aside className='sidebar-container'>
      <nav className='sidebar'>
        <ul>
          <a href='/'>
            <li>
              <img src={YogaIcon} alt='Icône de yoga'/>
            </li>
          </a>
          <a href='/'>
            <li>
              <img src={SwimIcon} alt='Icône de natation'/>
            </li>
          </a>
          <a href='/'>
            <li>
              <img src={CyclingIcon} alt='Icône de cyclisme'/>
            </li>
          </a>
          <a href='/'>
            <li>
              <img src={DumbBellIcon} alt="Icône d'haltère"/>
            </li>
          </a>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  )
}

export default SideBar;
