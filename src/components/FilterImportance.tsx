import React, {ChangeEvent, Dispatch, SetStateAction} from "react";

type FilterImportanceProps = {
	value:  Filter,
	onChange: Dispatch<SetStateAction<string>>
}
const FilterImportance = ({ value, onChange } : FilterImportanceProps) => {
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value);
	}
	return (
		<div>
			<label htmlFor="filter">Filter By Importance</label>
			<div className="select">
				<select
					id="filter"
					value={value}
					onChange={handleChange}
				>
					<option value="all">Show ALl</option>
					<option value="only_0">Show "0"</option>
					<option value="only_1">Show "1"</option>
					<option value="only_2">Show "2"</option>
				</select>
			</div>
		</div>
	);
};

export default FilterImportance;
