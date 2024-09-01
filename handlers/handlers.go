package handlers

import (
	"net/http"
)


func Hello(response http.ResponseWriter, request *http.Request) {
	response.Write([]byte("Hello handler\n"))
}
