import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

export default function SelectLabels() {
	const [lang, setLang] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setLang(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ minWidth: '400px' }}>
				<Select
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					value={lang}
					onChange={handleChange}
				>
					<MenuItem value="">English(default)</MenuItem>
					<MenuItem value={10}>Russian</MenuItem>
					<MenuItem value={20}>Turkish</MenuItem>
					<MenuItem value={30}>Spanish</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
