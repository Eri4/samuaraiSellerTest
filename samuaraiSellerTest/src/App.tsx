import {useEffect, useState} from 'react'
import './App.css'
import CampaignView from "./views/campaignView/CampaignView.tsx";
import {Campaign} from "./types/interfaces.ts";

function App() {
  const [campaignsData, setCampaignsData] = useState<Campaign[]>([]);
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

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
                setIsSuccess(true);
                setIsError(false)
                setTimeout(() => setIsSuccess(false), 10000);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsSuccess(false);
                setIsError(true)
                setTimeout(() => setIsError(false), 10000);
            });
    }

  return (
      <>
          <strong>Test For Samurai Seller</strong>
          <CampaignView campaigns={campaignsData} setCampaignsData={setCampaignsData}/>
          <button className='saveBttn' onClick={saveHandler}>Save Campaign Changes</button>
          {isSuccess && <p className='successTxt'>The Campaigns where updated with Success</p>}
          {isError && <p className='errorTxt'>There was an Error during the update</p>}
      </>
  )
}

export default App
