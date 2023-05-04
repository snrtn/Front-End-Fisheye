const url = "/data/photographers.json";

const fetchDex = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export default fetchDex;
