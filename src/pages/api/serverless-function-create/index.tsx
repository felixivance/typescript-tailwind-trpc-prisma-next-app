/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */



export default function handler(req: any, res: any) {
  console.log("Hello from serverless!")
    res.status(200).json({ message: 'Hello from serverless!' })
  }