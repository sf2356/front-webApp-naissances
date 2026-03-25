import type { Declaration } from '@/types_data/Declaration';
import DeclarationItem from './DeclarationItem';
import { BiSort } from 'react-icons/bi';
import { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContextProvider';

function Declarations() {
  //Appel du context
  const context=useContext(ApplicationContext)
if (!context) return null;
  const { declarations,filterdeclarations, sortByStatus, sortByDate, updateStatus } = context;
    return (
    <>
      <article className="grid grid-cols-12 align-center p-4 font-bold">
        <button
          type="button"
          onClick={() => sortByDate()}
          className="p-2 flex flex-row justify-center items-center cursor-pointer"
        >
          DATE
          <BiSort className="ml-2" />
        </button>
        <span className="p-2 col-span-2">ENFANT</span>
        <span className="p-2">DATE NAISSANCE</span>
        <span className="p-2">HOPITAL</span>
        <span className="p-2 col-span-2">PARENT 1</span>
        <span className="p-2 col-span-2">PARENT 2</span>
        <button
          type="button"
          onClick={() => sortByStatus()}
          className="p-2 flex flex-row justify-center items-center cursor-pointer"
        >
          STATUS
          <BiSort className="ml-2" />
        </button>
        <span className="p-2 col-span-2 flex flex-col text-center">ACTION</span>
      </article>
      {filterdeclarations.map((declaration: Declaration, index: number) => (
        /* Utilisation du composant DeclarationItem pour afficher chaque declaration dans une ligne de la grille, en passant les données de la declaration et l'index pour le style alterné */
        <DeclarationItem
          declaration={declaration}
          index={index}
          key={declaration.id}
          action={updateStatus}
        />
      ))}
    </>
  );
}

export default Declarations