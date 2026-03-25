import { useDeclaration } from '@/hooks/use-declarations/useDeclaration';
import type { Declaration } from '@/types_data/Declaration'
import React from 'react'

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