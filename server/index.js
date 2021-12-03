const fs = require('fs');
const csvParser = require("csv-parse");
const { AnomalyDetectorClient } = require('@azure/ai-anomaly-detector');
const { AzureKeyCredential } = require('@azure/core-auth');

// Spreadsheet with 2 columns and n rows.
//let CSV_FILE = './consumption_3_weeks_waschmaschine.csv';
//let CSV_FILE = './consumption_3_weeks_kochen.csv';
let CSV_FILE = './consumption_3_weeks_geschirrspuehler.csv';

// Authentication variables
let key = '7f08bc1d078c48ab8fa1504ebbf7d848';
let endpoint = 'https://pv-optimizer.cognitiveservices.azure.com/';

// Points array for the request body
let points = [];

function readFile() {
    let input = fs.readFileSync(CSV_FILE).toString();
    let parser = csvParser.parse(input, { skip_empty_lines: true, delimiter:';', });

    parser.on('readable', function(){
        let first = true;
        let record; while ((record = this.read()) !== null) {
            if(!first) {
                points.push({ timestamp: new Date(record[0]).toISOString(), value: parseFloat(record[1]) });
            } else {
                first = false;
            }
        }
      })
    parser.on('end', function(){
        [a, b, ...rest] = points;
        console.log("Parsed: ");
        console.log(a);
        console.log(b);
        batchCall();
    });
}
readFile()

async function batchCall() {
    // Create request body for API call
    let body = { series: points, maxAnomalyRatio: 0.03, sensitivity: 70, customInterval: 15,
        granularity: "minutely"}
    // Make the call to detect anomalies in whole series of points
    anomalyDetectorClient = new AnomalyDetectorClient(endpoint, { key });
    
    console.log('start request')
    console.log(body)
    await anomalyDetectorClient.detectEntireSeries(body)
        .then((response) => {
            console.log("Batch (entire) anomaly detection):")
            for (let item = 0; item < response.isAnomaly.length; item++) {
                if (response.isAnomaly[item]) {
                    console.log(points[item])
                    console.log("An anomaly was detected from the series, at row " + item)
                }
            }
            
        }).catch((error) => {
            console.log(error)
        })

}