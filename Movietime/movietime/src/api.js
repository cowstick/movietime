import axios from "axios";

const API_HOST = "streaming-availability.p.rapidapi.com";
const API_KEY = "2739c532e7msh3567044dfa4aa52p16b094jsn9859d1571e58";

// Function to get streaming information by type and id
export const getStreamingInfo = async (type, id) => {
  const options = {
    method: "GET",
    url: `https://${API_HOST}/shows/${type}/${id}`,
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching streaming information:", error);
    return null;
  }
};
