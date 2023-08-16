/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { NextApiRequest, NextApiResponse } from 'next';

// export const runtime = 'experimental-edge'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    res.status(200).json(data);
}