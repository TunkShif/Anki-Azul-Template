import type { NextApiRequest, NextApiResponse } from "next"
import * as templates from "../../../lib/templates"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await templates.getAll())
}
