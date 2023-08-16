/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'

export const runtime = 'experimental-edge'

export default function handler(req: any, res: any) {
    res.status(200).json({ message: 'Hello from edge runtime large!' })
  }