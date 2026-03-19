import { useEffect, useState } from "react";
import type { Declaration } from '../../types_data/Declaration';
import { apiEndpoints } from "@/services";


function useDeclaration() {
    //Declaration des variables d'etats pour les declarations et les filtres
  const [declarations, setDeclarations] = useState<Declaration[]>([]);

  //Recuperation des declarations depuis le backend (simulee ici avec un useEffect et une fonction de mock)
  const fetchDeclarations = async () => {
    const data = await apiEndpoints('declarations');
    setDeclarations(data);
  }
  useEffect(() => {
   fetchDeclarations();
   }, []);
   return {declarations}
}

export { useDeclaration }