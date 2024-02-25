#
# Start & Shutdown
#
up:
	docker-compose up -d

down:
	docker-compose kill
	docker-compose rm -f

logs:
	docker-compose logs -f