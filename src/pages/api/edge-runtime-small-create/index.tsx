/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { NextApiRequest, NextApiResponse } from 'next';

// export const runtime = 'experimental-edge'



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hi, this is a response from the large run time small create!' });
}