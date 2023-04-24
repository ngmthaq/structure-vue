set -e

current_date=`date -u`

yarn lint

yarn type-check

yarn test:unit-remote

yarn test:e2e-remote

yarn build

cd ./dist

git init

git add --all

git commit -m "Auto deploy from bash ($current_date UTC)"

git branch -M main

git push -f https://github.com/ngmthaq/ngmthaq.github.io.git main
