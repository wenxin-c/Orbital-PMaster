import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

// const onChange = (value) => {
//   console.log(`selected ${value}`);
  
// };

const onSearch = (value) => {
  console.log('search:', value);
};

const SelectPeople = (props) => (
  <Select
    showSearch
    multiple={true} value={['B', 'C']} 
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={(event)=>props.handleChange(event)}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    {props.tableHRContent.map(hr=><Option key={hr.name} value={hr.name}>{hr.name}</Option>)}
  </Select>
);

export default SelectPeople;