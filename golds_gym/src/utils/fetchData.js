export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ba9826b3f4msh23154c271f02992p12d2f9jsn5b12020e2369',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}