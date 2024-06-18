import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
  title: string; // Adding title property
  items: { label: string; value: string}[]; // Adding value property to items
  onChange: (selectedValue: string) => void; // Adding onChange event handler
}

const BasicSelect: React.FC<BasicSelectProps> = ({ title, items, onChange }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedValue(value);
    onChange(value); // Call the onChange event handler with the selected value
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={title}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
