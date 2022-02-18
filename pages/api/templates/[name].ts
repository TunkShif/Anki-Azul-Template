import type { NextApiRequest, NextApiResponse } from "next"
import * as templates from "../../../lib/templates"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query
  res.status(200).json(await templates.getOne(name as string))
}
