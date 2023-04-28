const url = "/data/photographers.json";

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Page refresh");
  }
};

export default fetchFollowers;
