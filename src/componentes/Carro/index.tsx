import './styles.css';
import carroImagem from '../../recursos/audi.png';

export default function Carro()
{
   return (
      <>
         <div className="vs-conteiner-carro vs-carro">
            <img src={carroImagem} alt="Carro"/>
            <h3>Lorem ipsum dolor</h3>
         </div>
      </>
   );
}