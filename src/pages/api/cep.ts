import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cep } = req.query;
  if (cep && cep?.length < 8) return;

  try {
    const response = await axios.get(`https://viacep.com.br/ws/22770104/json/`);
    console.log("response", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
