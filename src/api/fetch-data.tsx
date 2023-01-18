export const apiService = async (id?: string) => {
  const baseAPI = 'https://rickandmortyapi.com/api/character';
  const endPoint = id ? `${baseAPI}/${id}` : baseAPI;

  try {
    const data = await fetch(endPoint, {
      method: 'GET',
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
