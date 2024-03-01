import './keyinfo.css';

function KeyInfo({ info }) {

  return (
    <figure className='info-card'>
      <img src={info.icon} className={info.classname} alt={info.descr} />
      <figcaption>
        <p className='info-quantité'>{info.value} {info.unit} </p>
        <p className='info-unité'>{info.cat}</p>
      </figcaption>
    </figure>
  );
}

export default KeyInfo;
