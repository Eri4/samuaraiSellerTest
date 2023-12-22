package api

import (
	"encoding/json"
	"github.com/ermir/samuraiSellerTestServer/models"
	"log"
	"net/http"
)

func CampaignsHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		jsonResponse, err := json.Marshal(models.Campaigns)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		if _, err := w.Write(jsonResponse); err != nil {
			log.Println("Error writing response:", err)
		}
	case "POST":
		var data []models.Campaign
		err := json.NewDecoder(r.Body).Decode(&data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		models.Campaigns = data
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write([]byte("Data received and processed")); err != nil {
			log.Println("Error writing response:", err)
		}

	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}

}
