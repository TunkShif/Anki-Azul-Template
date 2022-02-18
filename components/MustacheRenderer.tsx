import Mustache from 'mustache'
import { useEffect, useRef } from 'react'

type MustacheRendererProps = {
  template: string
  view: any
}

const MustacheRenderer = ({ template, view }: MustacheRendererProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      let renderer = Mustache.render(template, view)
      ref.current.innerHTML = renderer
    }
  }, [template, view])

  return <div ref={ref}>Loading...</div>
}

export default MustacheRenderer
