import type { Declaration } from '@/types_data/Declaration'
import React, { useState } from 'react'

//Creation d'un type pour recuperer les données de state 

type StateData={
declarations:Declaration[]
}

//Creation du type pour les proprietés du context
type Props ={
    state:StateData
    updateDeclarations:(declarations:Declaration[])=> void 
    //Nous pouvons ici declarer tout nos object pour les utiliser au besoin 
    //ex:updateDemandes ou bien d'autres .
}

//Creation du contexte 
export const ApplicationContext=React.createContext<Props>({} as Props)

function ApplicationContextProvider({children}:any) {
  const [state, setState] = useState<StateData>({declarations:[]});
  const updateDeclarations = (declarations: Declaration[]) => {
    setState((current) => ({ ...current, state: declarations }));

  };
  return (
    <ApplicationContext.Provider value={{ state, updateDeclarations }}>
        {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider