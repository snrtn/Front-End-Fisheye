const url = "/data/photographers.json";

const fetchGraph = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export default fetchGraph;
