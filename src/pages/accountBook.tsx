import Layout from '@/components/Layout'
import React, { useState } from 'react'
import Select from 'react-select';

const accountBook = () => {
  const [dropDown, setDropdown] = useState<string[]>()

  type optionsType = {
    value: string;
    label: string;
  };
  const options: optionsType[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const handleChange = (dropDown: any) => {
    setDropdown(dropDown)

    console.log(dropDown,"dropDown");

  }

  return (
    <Layout>
      <div>
        <Select
          value={dropDown}
          onChange={handleChange}
          options={options}
        />


      </div>
    </Layout>
  )
}

export default accountBook
