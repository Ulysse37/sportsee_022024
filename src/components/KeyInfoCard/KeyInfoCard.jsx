import './keyinfocard.css';

import calorieIcon from "../../assets/calorie-fire-icon.svg";
import proteinIcon from "../../assets/protein-ham-icon.svg";
import glucidIcon from "../../assets/carbohydrate-apple-icon.svg";
import lipidIcon from "../../assets/lipid-burger-icon.svg";

import KeyInfo from "../KeyInfo/KeyInfo";
function KeyInfoCard({ item }) {
  const info = [
    {
      cat: "Calories",
      unit: "KCal",
      value: item.keyData.calorieCount,
      icon: calorieIcon,
      classname: "calorie-img",
      descr: "icône calorie",

    },
    {
      cat: "Proteines",
      unit: "g",
      value: item.keyData.proteinCount,
      icon: proteinIcon,
      classname: "protein-img",
      descr: "icône protéine",
    },
    {
      cat: "Glucides",
      unit: "g",
      value: item.keyData.carbohydrateCount,
      icon: glucidIcon,
      classname: "glucid-img",
      descr: "icône glucide",
    },
    {
      cat: "Lipides",
      unit: "g",
      value: item.keyData.lipidCount,
      icon: lipidIcon,
      classname: "lipid-img",
      descr: "icône lipide",
    }
  ]

  return (
    <figure className='keyinfo-container'>
      {info.map((info, index) => 
        <KeyInfo key={index} info={info} />
      )}
    </figure>
  );
}

export default KeyInfoCard;
