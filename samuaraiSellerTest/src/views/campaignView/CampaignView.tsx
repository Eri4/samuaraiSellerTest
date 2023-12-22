import DataListComponent from "../../components/dataListComponent.tsx";
import { Campaign } from "../../types/interfaces.ts";
import './CampaignView.css'
import React from "react";

type CampaignViewProps = {
    campaigns: Campaign[];
    setCampaignsData: React.Dispatch<React.SetStateAction<Campaign[]>>
};

const CampaignView = ({ campaigns, setCampaignsData }: CampaignViewProps) => {

    const handleStatusChange = (campaignId: string) => {
        setCampaignsData(campaigns.map(camp => {
            if (camp.id === campaignId) {
                return { ...camp, status: !camp.status };
            }
            return camp;
        }));
    };

    const renderCampaign = (campaign: Campaign) => {
        return (
            <>
                <strong>{campaign.title}</strong>
                <p>{campaign.status ? 'Active' : 'Inactive'} <input onChange={() => handleStatusChange(campaign.id)} type="checkbox" checked={campaign.status}/></p>
                <p>{campaign.startTime.toString()}</p>
            </>
        );
    };

    return (
        <DataListComponent items={campaigns} renderItem={renderCampaign}/>
    );
};

export default CampaignView;
