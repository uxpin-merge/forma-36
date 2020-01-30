import React from 'react';
import { Autocomplete } from '@contentful/forma-36-react-components';


export default class Search extends React.Component {
  render() {
    const searchItems = this.props.items.map((item, idx) => {
      return {
        label: `${item.parent ? item.name : 'dummy'}`,
        value: idx++
      }
    })
  
    return (
      <Autocomplete
        onChange={() => {}}
        onQueryChange={() => {}}
        items = {searchItems}
      />
    )
  }
}
