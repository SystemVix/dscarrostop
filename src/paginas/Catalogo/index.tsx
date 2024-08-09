import Cabecalho from '../../componentes/Cabecalho';
import Carro from '../../componentes/Carro';
import Comentario from '../../componentes/Comentario';
import Rodape from '../../componentes/Rodape';
import './styles.css';

export default function Catalogo()
{
   return (
      <>
         <header>
            <Cabecalho/>
         </header>
         <main>
            <section className="vs-secao-carro">
               <h2>Venha nos visitar</h2>
               <div className="vs-card-carro">
                  <Carro/>
               </div>
               <div className="vs-card-carro">
                  <Carro/>
               </div>               
            </section>
            <section className="vs-secao-comentario">
               <h2>O que estão dizendo</h2>
               <div className="vs-card-comentario">
                  <Comentario/>
               </div>
               <div className="vs-card-comentario">
                  <Comentario/>
               </div>
               <div className="vs-card-comentario">
                  <Comentario/>
               </div>
               <div className="vs-card-comentario">
                  <Comentario/>
               </div>
               <div className="vs-card-comentario">
                  <Comentario/>
               </div>               
            </section>
            </main>
         <footer>
            <Rodape/>
         </footer>               
      </>
   );
}