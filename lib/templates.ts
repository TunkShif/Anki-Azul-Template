import fs from "fs/promises"
import path from "path"

export type Template = {
  front: string
  back: string
  data: Record<string, string | null>
}

const templateDir = path.join(process.cwd(), "templates")

const getTemplateDir = (name: string) => path.join(templateDir, name)

export const getAll = () => fs.readdir(templateDir)

export async function getOne(
  name: string
): Promise<Template | { error: string }> {
  try {
    const dir = getTemplateDir(name)
    const front = await fs.readFile(path.join(dir, "front.html"), "utf8")
    const back = await fs.readFile(path.join(dir, "back.html"), "utf8")
    const data = JSON.parse(
      await fs.readFile(path.join(dir, "data.json"), "utf8")
    )
    return { front, back, data }
  } catch (e) {
    return { error: "not found" }
  }
}
