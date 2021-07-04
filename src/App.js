import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import FeatureBanner from './components/FeatureBanner';
import Search from './components/Search'
import React, { useEffect, useState } from 'react'
import { CSVToJSON } from './utils/commonUtils';

function App() {

  const [data, setData] = useState(null)
  const stableData = CSVToJSON()

  const filterByName = (name) => {
    setData(stableData.filter(data => data.INSTNM.includes(name)))
  }

  useEffect(() => {
      setData(CSVToJSON())
  }, [])

  if (!data) {
    return <h1>Loading...</h1>
  } else {
    return (
    <div className="App">
      <Header/>
      <FeatureBanner/>
      <Search filterByName={filterByName}/>
      <div className="flex-wrapper">
        {data.map(item => <Card item={item} key={item.UNITID}></Card>)}
      </div>
    </div>
  );
  }
}

export default App;
