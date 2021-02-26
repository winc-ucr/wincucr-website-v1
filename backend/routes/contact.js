const express = require('express');
const fs = require('fs');
const contactRouter = express.Router();
const {google} = require('googleapis');
const { osconfig } = require('googleapis/build/src/apis/osconfig');
const authGoogleAPI = require('./googleAPI/auth');
const googleAPIPath = './routes/googleAPI';

/**
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 * @param {Object} contactUsData Holds data from Contact Us Form
 */
function addContactSubmission(auth, contactUsData){
	console.log("Recieved Contact Form:");
	console.log(contactUsData);

	let timestamp = new Date(Date.now());
	let values = [
		[
			timestamp.toISOString(),
			contactUsData.email,
			contactUsData.subject,
			contactUsData.body
		]
	];
	let resource = {
		values:values,
	};
	
	const sheets = google.sheets({version: 'v4', auth: auth});
	sheets.spreadsheets.values.append({
			spreadsheetId: process.env.WINCUCR_GOOGLE_SPREADSHEET_ID,
			range:'A1',
			valueInputOption: 'RAW',
			resource:resource,
		}, (err, res) => {
			if (err){
				return {
					error: ('The API returned an error: ' + err),
				};
			}
			return {
				success:'Recieved Contact Form',
			};
		}
	);
}

// Endpoint Adds Contact Us Data to a Google Spreadsheet
contactRouter.post('/', function(req, res){
	let contactUsData = req.body;

	fs.readFile(`${googleAPIPath}/credentials.json`, (err, content) => {
		if (err) return console.log('Error loading client secret file:', err);
		// Authorize a client with credentials, then call the Google Sheets API.
		var clientCredentials = JSON.parse(content);
		let contactSubmissionResp = authGoogleAPI(clientCredentials.web, addContactSubmission, contactUsData);
		console.log(contactSubmissionResp);
		if(!contactSubmissionResp){
			console.log(contactSubmissionResp);
			res.status(500).send({error: "Failed To Submit"});
		}
		else{
			console.log("Form Submitted Successfully!")
			res.status(200).send(contactSubmissionResp);
		}
		
	});

});

module.exports = contactRouter;
