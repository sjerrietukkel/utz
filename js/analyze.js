const fs = require('fs')
const path = require('path')
const fetch = require("node-fetch")
const d3 = require('d3')

loadFile()

function loadFile(){
	fs.readFile("./databron/RHoMISmother_indicators.csv", {encoding: 'utf-8'}, function(err,data){
	    if (!err) {
	        //console.log('received data: ' + data);
	        parseData(data)
	    } else {
	        console.log(err);
	    }
	})
}

function parseData(source){
	console.log("parsing data")
	const data = d3.csvParse(source)
	console.log("#Entries in data: ", data.length)

	const selection = data//.slice(0,10)
	selection.forEach(datum => console.log(Number(datum.total_income)))
	writeDataFile(selection)
}

function writeDataFile(data)
{
	fs.writeFile('./databron/selection.json', JSON.stringify(data), 'utf8', function (err) {
	    if (err) {
	        return console.log(err)
	    } else {
	    	console.log("The file was saved!")
	    }
	})
}