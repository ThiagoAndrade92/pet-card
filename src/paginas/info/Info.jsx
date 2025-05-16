//Css
import './Info.css';

//Data
import { pets } from '../../../data/pets';

//React Router
import { useParams } from 'react-router-dom';

const Info = () => {

    const { id } = useParams();

    const pet = pets.find(pet => pet.id === Number(id))

  return (
    <section className='info'>
        <div className="container">
            <div className="pet-info d-flex flex-column align-items-center justify-content-around ">
                <div className="img-pet mb-3">
                    <img src={pet.img} alt={pet.nome} title={pet.nome} />
                </div>{/* img-pet */}
                <div className="bio">
                    <p>{pet.bio}</p>
                </div>
            </div>
        </div>{/* container */}
    </section>
  )
}

export default Info