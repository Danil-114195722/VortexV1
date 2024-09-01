package main

import (
	"fmt"
	"net/http"

	"github.com/echo-tokyo/Vortex/handlers"
)


func main() {
	addr := "0.0.0.0:8888"

	// регистрация обработчиков
	http.HandleFunc("/", handlers.Hello)

	fmt.Printf("Start server on %s...\n", addr)

	// запуск сервера
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		fmt.Println("ERROR!!! Server was not run")
		panic(err)
	}
}
