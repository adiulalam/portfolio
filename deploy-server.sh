#!/bin/bash

if [ -f .env ]; then
    echo "Loading environment variables from .env file"
    source .env
else
    echo ".env file not found, skipping"
fi

# This is the internal port
# On Prod seed you need to export it again for the `npm run db:seed:prod` to work
export POSTGRES_PORT="5432"
echo "Exporting POSTGRES_PORT to $POSTGRES_PORT"

# This is the internal host
export POSTGRES_HOST="portfolio-db"
echo "Exporting POSTGRES_HOST to $POSTGRES_HOST"

export DATABASE_URL="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB"
echo "Exporting DATABASE_URL to $DATABASE_URL"

export PORT=${PORT:-3000}
echo "Exporting PORT to $PORT"

echo "Waiting for `$POSTGRES_HOST` to come up..."
until nc -z $POSTGRES_HOST 5432; do
    echo "Waiting for database connection..."
    sleep 1
done
echo "Database is up, proceeding with setup..."

node server.js