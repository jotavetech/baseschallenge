interface SelectSystemProps {
  value: string;
  onChange: ({ target }: { target: { value: string } }) => void;
}

const SelectSystem = ({ value, onChange }: SelectSystemProps) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="rounded-xl bg-button-bg-2 text-xs font-medium px-3 py-1 text-primary dark:text-primary-dark cursor-pointer"
    >
      <option value="binary">binary</option>
      <option value="hex">hex</option>
      <option value="decimal">decimal</option>
    </select>
  );
};

export default SelectSystem;
