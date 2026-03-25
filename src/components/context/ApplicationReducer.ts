import { INITIAL_STATE, UPDATE_DECLARATION } from "@/Utils/Data_Link";

//Declaration de la fonction Application Reducer qui prends en entrer le state et l'action que nous souhaitons executer .
function ApplicationReducer(state:any,action:any) {
//Destructuration de la variable action 
    const {type,data}=action 

switch (type) {
    case UPDATE_DECLARATION:
        state={
            ...state,declarations:data
        }
        break;

    default:
        state=INITIAL_STATE;
}
//On retourne le state pour qu'il puisse etre utilisé .
return state
}

export {ApplicationReducer}