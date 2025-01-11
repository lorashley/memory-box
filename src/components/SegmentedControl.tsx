import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import React, {useState} from 'react'

type Props = {
    toggleButtons: string[]
    onChange: () => void
}


const SegmentedControl = ({toggleButtons, onChange}: Props) => {

    const [alignment, setAlignment] = useState(toggleButtons[0].toLowerCase());

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    onChange()
  };


return (<ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>=
  {toggleButtons.map((button) => 
  <ToggleButton value={button.toLowerCase()}>{button}</ToggleButton>
  )}
</ToggleButtonGroup>)
}

export default SegmentedControl