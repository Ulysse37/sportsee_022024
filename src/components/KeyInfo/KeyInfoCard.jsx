import './keyinfocard.css';

import calorieIcon from "../../assets/calorie-fire-icon.svg";
import proteinIcon from "../../assets/protein-ham-icon.svg";
import glucidIcon from "../../assets/carbohydrate-apple-icon.svg";
import lipidIcon from "../../assets/lipid-burger-icon.svg";

function KeyInfoCard({ item }) {

  return (
    <figure className='keyinfo-container'>
      <figure className='info-card'>
        <img src={calorieIcon} className="calorie-img" alt="icône calorie" />
        <figcaption>
          <p className='info-quantité'>{item.keyData.calorieCount}kCal</p>
          <p className='info-unité'>Calories</p>
        </figcaption>
      </figure>
      <figure className='info-card'>
        <img src={proteinIcon} className="protein-img" alt="icône proteine" />
        <figcaption>
          <p className='info-quantité'>{item.keyData.proteinCount}g</p>
          <p className='info-unité'>Proteines</p>
        </figcaption>
      </figure>
      <figure className='info-card'>
        <img src={glucidIcon} className="glucid-img" alt="icône glucide" />
        <figcaption>
          <p className='info-quantité'>{item.keyData.carbohydrateCount}g</p>
          <p className='info-unité'>Glucides</p>
        </figcaption>
      </figure>
      <figure className='info-card'>
        <img src={lipidIcon} className="lipid-img" alt="icône lipide" />
        <figcaption>
          <p className='info-quantité'>{item.keyData.lipidCount}g</p>
          <p className='info-unité'>Lipides</p>
        </figcaption>
      </figure>
    </figure>
  );
}

export default KeyInfoCard;
