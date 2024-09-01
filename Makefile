info_log = "/logs/info-log.log"
error_log = "/logs/error-log.log"


dev:
	go run ./main.go

compile:
	CGO_ENABLED=0 go build -o ./vortex_backend ./main.go


# ./vortex_backend >> $(info_log) 2>> $(error_log)
