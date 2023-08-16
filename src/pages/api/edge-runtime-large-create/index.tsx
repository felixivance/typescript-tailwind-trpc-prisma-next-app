import { NextApiRequest, NextApiResponse } from "next";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}