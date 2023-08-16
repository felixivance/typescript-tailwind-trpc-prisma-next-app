/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */


export const runtime = 'experimental-edge'

export default function handler(req: any, res: any) {
  console.log("Hello from edge runtime to big to deploy!")
    res.status(200).json({ message: 'Hello from edge runtime to big to deploy!' })
  }