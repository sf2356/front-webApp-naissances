import { useEffect, useState } from "react";
import { getStatusColor, getStatusTextFrench } from "@/Utils/Actions";
import { formDate } from "@/Utils/Date";
import type { Declaration } from "@/types_data/Declaration";
import { useDeclaration } from "@/hooks/use-declarations/useDeclaration";
import Declarations from "@/components/Declarations/Declarations";
import { Link } from "react-router-dom";

function DeclarationPage() {
  //Utilisation du hook personnalisé pour récupérer les declarations
  const { declarations, sortByStatus, sortByDate,filterByref,filterRef,filterdeclarations,updateStatus } = useDeclaration();
  return (
    <>
      <div className="bg-white shadow-md rounded-md flex flex-row justify-between items-center p-4">
        {/* Recuperations des declarations pour affichage  */}
        {/* Creation du formulaire de recherche et du bouton  */}
        <div className="flex-1 max-w-md">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              onKeyUp={filterByref}
              ref={filterRef}
              required
              placeholder="Rechercher par nom"
            />
          </label>
        </div>
        <Link to="/private/declaration/new">
          <button className="btn btn-primary">Ajouter une déclaration</button>
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-md">
        {/* Recuperations des declarations pour affichage  */}
        <Declarations
          declarations={filterdeclarations || declarations}
          sortBystatus={sortByStatus}
          sortByDate={sortByDate}
          updateStatus={updateStatus}
        />
      </div>
    </>
  );
}

export default DeclarationPage;
