import {useEffect, useState} from 'react'
import './App.css'
import CampaignView from "./views/campaignView/CampaignView.tsx";
import {Campaign} from "./types/interfaces.ts";

function App() {
  const [campaignsData, setCampaignsData] = useState<Campaign[]>([]);

    useEffect(() => {
        fetch('/api/campaigns')
            .then(response => response.json())
            .then(data => setCampaignsData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    const saveHandler = () => {
        fetch('/api/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campaignsData)
        })
            .then(response => {
                console.log('Success:', response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

  return (
      <>
          <strong>Test For Samurai Seller</strong>
          <CampaignView campaigns={campaignsData} setCampaignsData={setCampaignsData}/>
          <button className='saveBttn' onClick={saveHandler}>Save Campaign Changes</button>
      </>
  )
}

export default App
