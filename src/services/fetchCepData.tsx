import axios from "axios";

export async function fetchCepData(cep: string) {
  if (cep.length < 8) return;
  try {
    const response = await axios.post("/api/cep", { cep });
    return response.data;
  } catch (error) {
    console.error("Error fetching CEP data:", error);
  }
}
