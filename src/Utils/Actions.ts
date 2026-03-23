const getStatusColor = (status: string) => {
    switch (status) {
        case 'NEW':
            return 'bg-yellow-200 text-center p-2';
        case 'VALIDATED':
            return 'bg-green-200 text-center p-2';
        case 'REJECTED':
            return 'bg-red-200 text-center p-2';
        case 'ON_GOING':
            return 'bg-blue-200 text-center p-2';
        default:
            return 'bg-gray-200 text-center p-2';
    }
};

const getStatusTextFrench = (status: string) => {
    switch (status) {
        case 'NEW':
            return 'Nouvelle';
        case 'VALIDATED':
            return 'Validée';
        case 'REJECTED':
            return 'Rejetée';
        case 'ON_GOING':
            return 'En cours';
        default:
            return '';
    }

};
const STATUS=["NEW","VALIDATED","REJECTED","ON_GOING"]

export { getStatusColor, getStatusTextFrench,STATUS };