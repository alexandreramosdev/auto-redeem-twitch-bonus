#!/usr/bin/env bash

# Create the Chrome extension
rm -f auto-reddem-twitch-bonus-chrome.zip
pushd chrome
zip ../auto-reddem-twitch-bonus-chrome.zip *
popd