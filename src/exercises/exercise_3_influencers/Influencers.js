import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import InfluencersTable from './InfluencersTable'

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
})

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort 
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState('')

  const uniqueData = uniqueBy(data, 'member')

  const [filteredData, setFilteredData] = useState(filterBy(uniqueData, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]));
  
  useEffect(() => {
    setFilteredData(filterBy(uniqueData, search, [
      'indicationCategory',
      'affiliation',
      'affiliationPosition',
    ]))}
  , [search])

  const priority = (a, b) => {
    if (a.priority === "High" && (b.priority === "Medium" || b.priority === "Low")) {
      return -1;
    } else if (a.priority === "Medium" && b.priority === "Low") {
      return -1;
    } else if (a.priority === "Low" && (b.priority === "High" || b.priority === "Medium")) {
      return 1;
    } else if (a.priority === "Medium" && b.priority === "High") {
      return 1;
    } 
    return 0;
  }

  const handleClick = () => {
    setFilteredData([...filteredData].sort(priority));
  }

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={handleClick}>Sort by Priority</button>
      <InfluencersTable data={filteredData} />
    </Container>
  )
}

export default Influencers
