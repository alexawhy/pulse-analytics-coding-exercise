import React from 'react';

const InfluencersTableRow = (props) => {
  return (
    <tr>
      <td>{props.data.member}</td>
      <td>{props.data.influencerType}</td>
      <td>{props.data.indicationCategory}</td>
      <td>{props.data.affiliation}</td>
      <td>{props.data.affiliationPosition}</td>
      <td>{props.data.primaryState}</td>
      <td>{props.data.priority}</td>
    </tr>
  )
}

export default InfluencersTableRow;