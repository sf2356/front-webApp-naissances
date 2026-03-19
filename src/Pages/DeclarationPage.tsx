import { useEffect, useState } from 'react';
import { getStatusColor, getStatusTextFrench } from '@/Utils/Actions';
import { formDate } from '@/Utils/Date';
import type { Declaration } from '@/types_data/Declaration';
import { useDeclaration } from '@/hooks/use-declarations/useDeclaration';
import Declarations from '@/components/Declarations/Declarations';

function DeclarationPage() {

  //Utilisation du hook personnalisé pour récupérer les declarations
    const {declarations,sortByStatus,sortByDate} = useDeclaration();
  return (
    <div className='border border-blue'>
      {/* Recuperations des declarations pour affichage  */}
    <Declarations declarations={declarations} sortBystatus={sortByStatus} sortByDate={sortByDate} />
      </div>
  )
}

export default DeclarationPage