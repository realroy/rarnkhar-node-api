#!/bin/sh
set -e

echo "CREATE DATABASE "$DB_NAME"_development;" | psql -U $POSTGRES_USER
echo "CREATE DATABASE "$DB_NAME"_test;" | psql -U $POSTGRES_USER
echo "CREATE DATABASE "$DB_NAME"_production;" | psql -U $POSTGRES_USER

