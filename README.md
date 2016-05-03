# linkedin-app
A barebones AngularJS app to demo some basic LinkedIn API features.

This app implements some very basic LinkedIn functionality, including
* OAuth authorization
* Profile retreival
* Share with LinkedIn

All cross-origin communication is wrapped in LinkedIn's [JavaScript SDK](https://developer.linkedin.com/docs/getting-started-js-sdk).

Setup
* Clone this repository `git clone https://github.com/nickfaughey/linkedin-app.git`
* Install dependencies `npm install`
* Start the NodeJS/Express server `npm run server`
* Visit the app in browser at [http://localhost:8000](http://localhost:8000)

The app will ask you to sign in with LinkedIn before viewing your profile or sharing a post.
