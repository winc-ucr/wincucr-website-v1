const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const googleAPIPath = './routes/googleAPI';

// Code Referenced: https://developers.google.com/sheets/api/quickstart/nodejs

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = `${googleAPIPath}/token.json`;

// Load client secrets from a local file.
fs.readFile(`${googleAPIPath}/credentials.json`, (err, content) => {
	if (err) return console.log('Error loading client secret file:', err);
	// Authorize a client with credentials, then call the Google Sheets API.
	var clientCredentials = JSON.parse(content);
	authorize(clientCredentials.web, authSuccess);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 * @param {Object} data Any data the client wants to pass to the callback.
 */
function authorize(credentials, callback, data) {
	console.log(credentials);
	const client_secret = credentials.client_secret;
	const client_id = credentials.client_id;
	const redirect_uris = credentials.redirect_uris;
	
	console.log(redirect_uris);

	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getNewToken(oAuth2Client, callback);
		oAuth2Client.setCredentials(JSON.parse(token));
		callback(oAuth2Client, data);
	});
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 * @param {Object} data Any data the client wants to pass to the callback.
 */
function getNewToken(oAuth2Client, callback, data) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client, data);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function authSuccess(auth){
    if(auth){
		console.log("Authorized access to Google API.")
	}
	else{
		console.log("Failed to authorize Google API.")
	}
}

module.exports = authorize;