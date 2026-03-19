import type { Declaration } from '@/types_data/Declaration';
import DeclarationItem from './DeclarationItem';
import { BiSort } from 'react-icons/bi';

type Props={
    declarations: Declaration[]
    sortBystatus:()=> void
}

function Declarations(props: Props) {
    //Destructuration des declarations passées en props
    const { declarations,sortBystatus } = props;
  return (
    <>
     <article className='grid grid-cols-12 align-center p-4 font-bold'>
            <span className='p-2'>DATE</span>
            <span className='p-2 col-span-2'>
              ENFANT
            </span>
            <span className='p-2'>
             DATE NAISSANCE
            </span>
            <span className='p-2'>
             HOPITAL   
            </span>
            <span className='p-2 col-span-2'>
              PARENT 1
            </span>
            <span className='p-2 col-span-2'>
              PARENT 2
            </span>
            <button type="button" 
            onClick={()=>sortBystatus()}
            className='p-2 flex flex-row justify-center items-center cursor-pointer'>STATUS
                <BiSort className='ml-2' />
            </button>
            <span className='p-2 col-span-2 flex flex-col text-center'>ACTION</span>
          </article>
      {
        declarations.map((declaration: Declaration, index: number) => (
            /* Utilisation du composant DeclarationItem pour afficher chaque declaration dans une ligne de la grille, en passant les données de la declaration et l'index pour le style alterné */
          < DeclarationItem declaration={declaration} index={index} key={declaration.id}/>
        ))
      }
    </>
  )
}

export default Declarations