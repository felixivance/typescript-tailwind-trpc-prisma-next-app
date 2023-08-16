/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { NextApiRequest, NextApiResponse } from 'next';

// not working
// export const runtime = 'experimental-edge'

// this fails with edge runtime :https://github.com/vercel/next.js/issues/46128
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ message: 'Hi, this is a response from the API!' });
  // new Response(res, 200, { message: 'Hi, this is a response from the edge runtime too big to deploy!' });
}

