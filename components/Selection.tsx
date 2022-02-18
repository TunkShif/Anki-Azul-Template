type SelectionProps = {
  selected: string
  onSelected: (value: string) => void
  selections: string[]
}

const Selection = ({ selected, onSelected, selections }: SelectionProps) => {
  return (
    <select
      className="select-bordered select w-full max-w-xs"
      value={selected}
      onChange={(e) => {
        onSelected(e.target.value)
      }}
    >
      {selections.map((selection) => (
        <option key={selection}>
          {selection}
        </option>
      ))}
    </select>
  )
}

export default Selection
