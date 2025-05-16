//Css
import './Cards.css';

//React Router
import { Link } from 'react-router-dom';

//Data
import { pets } from '../../../data/pets';

const Cards = () => {
  return (
    <section className='cards mt-5'>
        <div className="container">
            <div className="cards-box row justify-content-center">
                {pets && pets.map((pet) => (
                    <Link to={`/info/${pet.id}`} className="card col-12 col-sm-4 col-md-4 col-lg-2 m-3 d-flex align-items-center justify-content-center shadow"   key={pet.id}>
                        <h1 className="nome-pet text-center">{pet.nome}</h1>
                    </Link>
                ))}
            </div>{/* cards-box */}
        </div>{/* container */}
    </section>
  )
}

export default Cards