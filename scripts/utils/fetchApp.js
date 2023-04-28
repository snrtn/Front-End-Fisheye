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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

export default fetchFollowers || id;
