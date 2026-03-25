
import type { Declaration } from '@/types_data/Declaration';
import  { useReducer } from 'react'

type State = {
  declarations: Declaration[];
  filterDeclarations:Declaration[]
};

const initialState: State = {
  declarations: [],
  filterDeclarations:[]
};
type Action =
  | { 
    type: "SET_DECLARATIONS"; payload: Declaration[] 
}
  | { 
    type: "UPDATE_STATUS"; payload: { id: string; status: string } 
};

function ApplicationReducer(state:State,action:Action) {

    switch (action.type) {
    case "SET_DECLARATIONS":
        return {
            ...state,declarations:action.payload
        };
        case "UPDATE_STATUS":
        return {
            ...state,
        declarations: state.declarations.map(item =>
          item.id === action.payload.id
            ? { ...item, status: action.payload.status }
            : item
        ),
        filterdeclarations: state.filterDeclarations.map(item =>
      item.id === action.payload.id
        ? { ...item, status: action.payload.status }
        : item
    )
        };

    default:
        return state;
}

}

export default ApplicationReducer






















