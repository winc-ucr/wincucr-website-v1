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
	console.log(contactUsData.data);

	let timestamp = new Date(Date.now());
	let values = [
		[
			timestamp.toISOString(),
			contactUsData.data.email,
			contactUsData.data.subject,
			contactUsData.data.body
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
				console.error('The API returned an error: ' + err);
				contactUsData.res.status(500).send({message:'Server Failed to Submit'})
			}
			else{
				console.log("Contact Form Successfully Submitted")
				contactUsData.res.status(200).send({message:'Recieved Contact Form'})
			}
		}
	);
}

// Endpoint Adds Contact Us Data to a Google Spreadsheet
contactRouter.post('/', function(req, res){
	let contactUsData = req.body;
	fs.readFile(`${googleAPIPath}/credentials.json`, (err, content) => {
		if (err) return console.log('Error loading client secret file:', err);
		// Authorize a client with credentials, then call the Google Sheets API.
		let clientCredentials = JSON.parse(content);
		let addContactData = {
			res: res,
			data: contactUsData
		}
		authGoogleAPI(clientCredentials.web, addContactSubmission, addContactData);
	});

});

module.exports = contactRouter;
