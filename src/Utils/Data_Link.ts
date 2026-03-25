import Declarations from "@/components/Declarations/Declarations";

const DATA_LINK = [
    {
        'to1': "/dashboard",
        'label1': "Tableau de bord"
    },
    {
        'to2': "/declarations",
        'label2 ': "Declarations"     
    },
    {
        'to3': "/notifications",
        'label3': "Notifications",
    },
    {
        'to4': "/settings",
        'label4': "Parametres",
    }
];

//Declaration de la variable UPDATE_DECLARATION Pour la rendre public 
const UPDATE_DECLARATION="UPDATE_DECLARATION";
const INITIAL_STATE={Declarations: []};

export {DATA_LINK,UPDATE_DECLARATION,INITIAL_STATE};