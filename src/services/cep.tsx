import axios from "axios";

export async function getCep(cep?: string) {
  try {
    const response = await axios.get("/api/cep");
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching CEP data:", error);
  }
}
