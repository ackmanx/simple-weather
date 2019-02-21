# How to deploy

1. Do whatever I want and commit it in `master`
1. When ready to deploy, merge `master` into `netlify`
1. Push to `origin`
1. Netlify will auto-detect the push and deploy

## Netlify

https://simple-weather-graph.netlify.com/

To set up, I created a free account and connected Netlify to my BitBucket repository. They added a git hook to it and auto-deploy when I push to `origin/netlify`.

On push, Netlify runs my user-defined npm script (set via their control panel UI on the website) `build`. They will then host whatever is found in the `dist` directory (also user-defined on their UI).

This application has no server component hosted by itself. 


# Where the data comes from

I source the data from a serverless function I created at Webtask IO (https://webtask.io/make) with my `iss` account. This allows me to have a free public API with zero management of a node instance.

Webtask also lets you store a limited amount of data on their servers for free.
