package models

import "time"

type Campaign struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Status    bool      `json:"status"`
	StartTime time.Time `json:"startTime"`
}

var Campaigns = []Campaign{
	{ID: "1", Title: "Selling cars", Status: true, StartTime: time.Now().UTC()},
	{ID: "2", Title: "NordVPN", Status: false, StartTime: time.Now().UTC().Add(24 * time.Hour)},
	{ID: "3", Title: "Elden Ring campaign", Status: true, StartTime: time.Now().UTC()},
}
