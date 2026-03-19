import { useEffect, useState } from "react";
import type { Declaration } from "../../types_data/Declaration";
import { apiEndpoints } from "@/services";

function useDeclaration() {
  //Declaration des variables d'etats pour les declarations et les filtres
  const [declarations, setDeclarations] = useState<Declaration[]>([]);
  //Declaration du uestate pour le trie à l'inverse des declarations
  const [orderStatus, setOrderStatus] = useState(1);

  //Creation de la methode sortByStatus

  const sortByStatus = () => {
    const sortDeclaration = declarations.sort(
      (itemOne: Declaration, itemTwo: Declaration) => {
        const { status: statusItemOne } = itemOne;
        const { status: statusItemTwo } = itemTwo;
        let result = 0;
        if (statusItemOne === statusItemTwo) {
          result = 0;
        } else if (statusItemOne > statusItemTwo) {
          result = 1;
        } else {
          result = -1;
        }
        setOrderStatus(orderStatus * -1);
        return result * orderStatus;
      },
    );

    //On eclate le contenu de la destructuration
    setDeclarations([...sortDeclaration]);

    console.log("bonjour à tous ");
  };

  //Recuperation des declarations depuis le backend (simulee ici avec un useEffect et une fonction de mock)
  const fetchDeclarations = async () => {
    const data = await apiEndpoints("declarations");
    setDeclarations(data);
  };
  useEffect(() => {
    fetchDeclarations();
  }, []);
  return { declarations, sortByStatus };
}

export { useDeclaration };
