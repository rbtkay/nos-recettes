#!/bin/bash
read -p "Sure about the migration ? (y/n) " answer
if [ $answer = "n" ]; then
    exit
else
    (
        cd ./prisma
        npx prisma migrate
        npx prisma migrate save --experimental
        npx prisma migrate up --experimental
        npx prisma generate
    )
fi
