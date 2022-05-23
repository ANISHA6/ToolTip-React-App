import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin: 100px 0;
  border-radius: 5px;
  width: 200px;
  font-size: 1.25rem;
`;

function TooltipSelector({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select name="tooltipselector" onChange={handleChange}>
      <option value="choose" selected>
        Select (L, R, T, B)
      </option>

      <option value="left">Left</option>
      <option value="top">Top</option>
      <option value="right">Right</option>
      <option value="bottom">Bottom</option>
    </Select>
  );
}

export default TooltipSelector;
