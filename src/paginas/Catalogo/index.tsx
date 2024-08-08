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
               <Carro/>
               <Carro/>
            </section>
            <section className="vs-secao-comentarios">
               <Comentario/>
               <Comentario/>
               <Comentario/>
               <Comentario/>
               <Comentario/>
            </section>
         </main>
         <footer>
            <Rodape/>
         </footer>               
      </>
   );
}