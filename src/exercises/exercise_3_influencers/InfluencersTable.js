import React from 'react';
import InfluencersTableRow from './InfluencersTableRow';

const InfluencersTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Member</th>
          <th>Type</th>
          <th>Category</th>
          <th>Affiliation</th>
          <th>Title</th>
          <th>State</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <InfluencersTableRow data={row} key={row.member}/>
        ))}
      </tbody>
    </table>
  )
}

export default InfluencersTable;