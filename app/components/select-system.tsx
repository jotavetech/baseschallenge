interface SelectSystemProps {
  value: string;
  onChange: ({ target }: { target: { value: string } }) => void;
}

const SelectSystem = ({ value, onChange }: SelectSystemProps) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="rounded-xl bg-button-bg-2 text-xs font-medium px-3 py-1"
    >
      <option value="binary">Binary</option>
      <option value="hex">Hex</option>
      <option value="decimal">Decimal</option>
    </select>
  );
};

export default SelectSystem;
