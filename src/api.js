export const getCharactersList = async () => {
    const apiData = await fetch("https://rickandmortyapi.com/api/character/");
    const apiConvertedData = await apiData.json();
    return apiConvertedData.results;
};
