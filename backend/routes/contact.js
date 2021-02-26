const express = require('express');
const contactRouter = express.Router();
const {google} = require('googleapis');
const authGoogleAPI = require('./googleAPI/auth');
const googleAPIPath = './routes/googleAPI';

/**
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 * @param {Object} contactUsData Holds data from Contact Us Form
 */
function addContactSubmission(auth, contactUsData){
	let values = [
		[
			contactUsData.email,
			contactUsData.subject,
			contactUsData.body
		]
	];

	let resource = {
		values,
	};

	const sheets = google.sheets({version: 'v4', auth: auth});
	sheets.spreadsheets.values.append({
			spreadsheetId: 'SPREADSHEET ID',
			range: 'Class Data!A2:E',
			resource:resource,
		}, (err, res) => {
			if (err) return console.log('The API returned an error: ' + err);
			const rows = res.data.values;
			if (rows.length) {
				console.log('Name, Major:');
				// Print columns A and E, which correspond to indices 0 and 4.
				rows.map((row) => {
					console.log(`${row[0]}, ${row[4]}`);
				});
			} else {
				console.log('No data found.');
			}
		}
	);
}

// Adds Contact Us Data to a Google Spreadsheet
contactRouter.post('/submit', function(req, res){
	console.log("Recieved Contact Form");
	let contactUsData = req.body;

	fs.readFile(`${googleAPIPath}/credentials.json`, (err, content) => {
		if (err) return console.log('Error loading client secret file:', err);
		// Authorize a client with credentials, then call the Google Sheets API.
		var clientCredentials = JSON.parse(content);
		authGoogleAPI(clientCredentials.web, addContactSubmission, contactUsData);
	});

});

module.exports = contactRouter;
