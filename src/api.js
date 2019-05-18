export const getCharactersList = async (page = 1) => {
    const apiData = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const apiConvertedData = await apiData.json();
    return apiConvertedData.results;
};
