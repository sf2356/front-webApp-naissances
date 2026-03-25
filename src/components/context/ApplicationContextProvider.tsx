import { useDeclaration } from '@/hooks/use-declarations/useDeclaration';
import type { Declaration } from '@/types_data/Declaration'
import React, { useReducer, useState } from 'react'
import { ApplicationReducer } from './ApplicationReducer';
import { INITIAL_STATE } from '@/Utils/Data_Link';

//Creation des types pour le context 
type ContextType = {
  declarations: Declaration[];
  filterdeclarations: Declaration[];
  sortByStatus: () => void;
  sortByDate: () => void;
  filterByref: () => void;
  filterRef: any;
  updateStatus: (data: { id: string; status: string }) => void;
  //updateDeclaration:(declarations:Declaration[]) => void
};

//Creation du context 
//Creation du contexte 
export const ApplicationContext=React.createContext<ContextType|null>(null);

const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);
function ApplicationContextProvider({children}:{children:React.ReactNode}) {
    //Reutilisation du hook useDeclaration
    const declarationData=useDeclaration();
  return (
    <ApplicationContext.Provider value={declarationData}>
        {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider