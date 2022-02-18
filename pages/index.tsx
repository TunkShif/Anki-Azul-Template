import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Template } from "../lib/templates"
import MustacheRenderer from "../components/MustacheRenderer"
import PhoneMockup from "../components/PhoneMockup"
import Selection from "../components/Selection"

const Home: NextPage = () => {
  const [selected, setSelected] = useState("")
  const [flipped, setFlipped] = useState(false)
  const [templates, setTemplates] = useState<string[]>([])
  const [template, setTemplate] = useState<Template | null>(null)

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => {
        setSelected(data[0])
        setTemplates(data)
      })
  }, [])

  useEffect(() => {
    fetch(`/api/templates/${selected}`)
      .then((res) => res.json())
      .then((data: Template) => setTemplate(data))
  }, [selected])

  return (
    <div>
      <Head>
        <title>Anki Azul Templates Preview</title>
        <meta
          name="description"
          content="Anki Azul Templates Preview, Powered by Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12 flex flex-col items-center justify-center">
        <div className="mb-8">
          <Selection
            selected={selected}
            onSelected={(value) => setSelected(value)}
            selections={templates}
          />
        </div>

        <PhoneMockup>
          <div className="h-full w-full bg-gray-50 pt-6">
            <MustacheRenderer
              template={
                (flipped ? template?.back : template?.front) || "Loading..."
              }
              view={template?.data || {}}
            />
          </div>
        </PhoneMockup>

        <div className="mt-8">
          <button className="btn" onClick={() => setFlipped(!flipped)}>
            Flip
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
