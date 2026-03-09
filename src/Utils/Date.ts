const formDate = (value: string) => {
    const date = new Date(value.split('T')[0]);
    const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const mois = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
    const jourNom = jours[date.getDay()];
    const jour = date.getDate().toString().padStart(2, '0');
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();
    return `${jourNom} ${jour} ${moisNom} ${annee}`;
}
export { formDate }