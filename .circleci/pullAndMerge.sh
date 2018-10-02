git pull origin $CIRCLE_BRANCH
git merge -X theirs --no-edit $CIRCLE_BRANCH
npm run build
git add -f lib docs
mkdir ~/.git && git config user.email "devdoomari@gmail.com" && git config user.name "devdoomari.circleci"
git commit --allow-empty -m $'generated from:'"$CIRCLE_SHA1"$'\ntriggered by:'"$CIRCLE_USERNAME"$'\n[ci skip]'
git tag -a $'dist_'"$CIRCLE_BRANCH"'_'"$CIRCLE_BUILD_NUM" -m "."