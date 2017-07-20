#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

git config user.name "Travis CI"
git config user.email "callniladri.pro@gmail.com"
git config --global push.default simple

chmod 600 push_key
eval `ssh-agent -s`
ssh-add push_key

git checkout ${TRAVIS_BRANCH}
rm -rf lib/*
tsc
npm test

status=$(git status --porcelain | tr '\n' ' ')
if [ -z "${status}" ]
then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

git add -A .
git commit -m "Push built resources: ${SHA}"

# Now that we're all set up, we can push.
git push $SSH_REPO