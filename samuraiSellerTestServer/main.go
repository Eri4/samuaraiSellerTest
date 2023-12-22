package main

import (
	"github.com/ermir/samuraiSellerTestServer/api"
	"log"
	"net/http"
	"os"
)

func main() {
	//for serving the React build when in deployment
	fs := http.FileServer(http.Dir("../samuaraiSellerTest/dist"))
	http.Handle("/", fs)

	http.HandleFunc("/api/campaigns", api.CampaignsHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Println("Server is starting on port 8080...")
	} else {
		log.Println("Server is starting on production...")
	}

	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
