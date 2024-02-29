import './banner.css';

function Banner({ name, text }) {
  return (
    <section className='banner-container'>
      <h1>Bonjour <span>{name}</span></h1>
      <p>{text}</p>
    </section>
  )
}

export default Banner;
