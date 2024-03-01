import './banner.css';

function Banner({ name, text }) {
  return (
    <header className='banner-container'>
      <h1>Bonjour <span>{name}</span></h1>
      <p>{text}</p>
    </header>
  )
}

export default Banner;
