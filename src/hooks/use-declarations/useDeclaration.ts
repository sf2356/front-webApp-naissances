import { useEffect, useRef, useState } from "react";
import type { Declaration } from "../../types_data/Declaration";
import { apiEndpoints } from "@/services";

function useDeclaration() {
  //Declaration des variables d'etats pour les declarations et les filtres
  const [declarations, setDeclarations] = useState<Declaration[]>([]);
  //Declaration des variables d'etats pour les declarations filtrés
  const [filterdeclarations, setFilterDeclarations] = useState<Declaration[]>([]);
  //Declaration du uestate pour le trie à l'inverse des declarations
  const [orderStatus, setOrderStatus] = useState(1);
  const [orderDate, setOrderDate] = useState(1);

  //Declaration d'une reference pour les filter 
  const filterRef=useRef<any>(0);

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
  };

  const sortByDate = () => {
    const sortDeclaration = declarations.sort(
      (itemOne: Declaration, itemTwo: Declaration) => {
        const { registered: itemDateOne } = itemOne;
        const { registered: itemDateTwo } = itemTwo;

        const jsDateOneFormat = itemDateOne.split(" ")[0];
        const jsDateTwoFormat = itemDateTwo.split(" ")[0];

        let result =
          new Date(jsDateOneFormat).getTime() -
          new Date(jsDateTwoFormat).getTime();
        setOrderDate(orderDate * -1);
        return result * orderDate;
      },
    );

    //On eclate le contenu de la destructuration
    setDeclarations([...sortDeclaration]);
  };
  
  const filterByref=()=>{
    const filter=filterRef.current.value || "";
    if (filter.length>=3) {
     const filteredDeclaration= declarations.filter(item=>{
        const {child:{firstName,lastName}}=item;
        return (
          firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          lastName.toLowerCase().includes(filter.toLowerCase())
        );
      })
      setFilterDeclarations([...filteredDeclaration]);

    }
    else   {
      setFilterDeclarations([...declarations]);
    }
    
    
  }

  //Recuperation des declarations depuis le backend (simulee ici avec un useEffect et une fonction de mock)
  const fetchDeclarations = async () => {
    const data = await apiEndpoints("declarations");
    setDeclarations(data);
    setFilterDeclarations(data);
  };

  useEffect(() => {
    fetchDeclarations();
  }, []);

  //Fonction pour la modification du status d'une declaration 

  const updateStatus=(data:{id:string,status:string})=>{
    console.log(data)
  }

  return {
    declarations,
    sortByStatus,
    sortByDate,
    filterByref,
    filterRef,
    filterdeclarations,
    updateStatus
  };
}

export { useDeclaration };
