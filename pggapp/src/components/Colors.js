//set the color scheme of pokemon types
export const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B356',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
};

//set the color scheme of pokemon stats
export const getColorForStat = (baseStat) => {
    if (baseStat >= 150) {
        return '#5ad45a';
    } else if (baseStat >= 100) {
        return '#1a53ff';
    } else if (baseStat >= 50) {
        return '#ffee65';
    } else {
        return '#b30000';
    }
};