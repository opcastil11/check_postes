const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const Excel = require('exceljs');
//const mysql = require('mysql');

const ip_host = 'localhost'
const staticPath = path.join(__dirname, 'public');
const indexFile = path.join(__dirname, 'public')+'/index.html';

//'../Front/dist/camera-logs-app/index.html'
var excelRecords = [];
var folder_quantity = 0;
var folder_quantity_count = 0;
var id_record = 1;
var outputeExcelFile = '';

const app = express();

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "postes_db",
//   password: "postes_db",
//   database: "postes_db",
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

app.use(express.static(staticPath));
app.get('/', (req, res) => {
   res.sendfile(indexFile); 
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let today = moment().format('YYYY-MM-DD')
let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
let logs_database = [];
let new_logs_database = [];
let count_logs = 0;


app.get('/images', function(req, res){
  var image_path = req.query.image_path;
  var file = `${staticPath}/${image_path}`;
  //console.log(file);
  fs.access(file, fs.F_OK, (err) => {
    if (err) {
      file = `${staticPath}/no_image.png`;
    }
    res.download(file);
  })
});

app.get('/images/no_image.png', function(req, res){
  const file = `${staticPath}/no_image.png`;
  res.download(file); // Set disposition and send it.
});

app.get('/records', (req, res) => {
	var main_sheet = 'Datos'
	var workbook = new Excel.Workbook();
	var excelRecordsOutput = [];
	workbook.xlsx.readFile(outputeExcelFile).then(function() {
		var worksheet = workbook.getWorksheet(main_sheet);
	        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
	          if (rowNumber > 1){
		          var record = parseRecordsOutput(row.values);
		          excelRecordsOutput.push(record);
	      	  }
	      	
	    });
	res.send(excelRecordsOutput);
	});
    
});

app.delete('/records', (req, res) => {
	clearExcels();
	res.json('Generating new excel'); 
});

app.put('/records/:id', (req, res) => {
	var id = req.params.id;
	console.log('editing: '+id);
	var type = req.query.type;
	var value = req.query.value;
	var main_sheet = 'Datos'
	var response = [];
	var workbook = new Excel.Workbook();
	workbook.xlsx.readFile(outputeExcelFile).then(function() {
		var worksheet = workbook.getWorksheet(main_sheet);
	        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
	        if (id == row.values[1]){
		        var row = worksheet.getRow(rowNumber);
		        var cell = selectCellEdit(type);
		        row.getCell(cell).value = value;
		        row.getCell(12).value = moment().format('YYYY/MM/DDTHH:mm');
		        if (type == 'dmin_telecom'){
		        	if (value < 4){
		        		row.getCell(5).value = 'En norma';
		        	}else{
		        		row.getCell(5).value = 'Fuera de norma';
		        	}
		        	
		        };
		        response = row.values;
		        row.commit();
		        return workbook.xlsx.writeFile(outputeExcelFile);
	        }
	    });
	res.send(response);
	});
});

app.delete('/records/:id', (req, res) => {
	var id = req.params.id;
	console.log('deleting: '+id);
	var main_sheet = 'Datos'
	var response = [];
	var workbook = new Excel.Workbook();
	workbook.xlsx.readFile(outputeExcelFile).then(function() {
		var worksheet = workbook.getWorksheet(main_sheet);
	        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
	        if (id == row.values[1]){
		        row.values = [];
		        worksheet.spliceRows(rowNumber,1);
		        row.commit();
		        return workbook.xlsx.writeFile(outputeExcelFile);
	        }
	    });
	res.send(response);
	});
});

app.get('/clear', function(req, res){
  clearExcels();
  res.send("OK");
});

app.get('/download', function(req, res){
  const file = outputeExcelFile;
  res.download(file); // Set disposition and send it.
});

// let getRecordsDb = function (){
//     query = `SELECT * FROM Events WHERE time > "${time}" AND time > "${yesterday}" ORDER BY time DESC`
// 	con.query(sql, function (err, result) {
// 		if (err) throw err;
// 		console.log("Result: " + result);
// 	});
// };

// let insertRecordDb = function (record){
// 	sql = ""
// 	con.query(sql, function (err, result) {
// 		if (err) throw err;
// 		console.log("Result: " + result);
// 	});
// };

// let editRecordDb = function (record){
// 	sql = ""
// 	con.query(sql, function (err, result) {
// 		if (err) throw err;
// 		console.log("Result: " + result);
// 	});
// };

// let deleteAllRecordsDb = function (record){
// 	sql = ""
// 	con.query(sql, function (err, result) {
// 		if (err) throw err;
// 		console.log("Result: " + result);
// 	});
// };


let selectCellEdit = function (type){
	switch (type) {
	  case 'dmin_telecom':
	  	return 4;
	  case 'status':
	    return 13;
	  default:
	  	return null
	}

};

let parseRecordsOutput = function(record) {
    var result = {
			        id: record[1],
			        file: record[2],
			        date: record[3],
			        dmin_telecom: record[4],
			        norme: record[5],
			        lat_p: record[6],
			        lon_p: record[7],
			        video_name: record[8],
			        video_time: record[9],
			        image: record[10],
			        image_path: record[11],
			        last_time_reviewed: record[12],
			        status: record[13],

			    };
    return result 
}


let parseRecords = function(folder, file, record) {

    var id = id_record;
    var date = record[3];
    var dmin_telecom = record[4];
    var norme = record[5];
    var lat_p = record[6];
    var lon_p = record[7];
    var video_name = record[8];
    var video_time = record[9];
    var image = record[10];
    var image_path = folder+"/"+image;

    var result = {
			        id: id,
			        file: file,
			        date: date,
			        dmin_telecom: dmin_telecom,
			        norme: norme,
			        lat_p: lat_p,
			        lon_p: lon_p,
			        video_name: video_name,
			        video_time: video_time,
			        image: image,
			        image_path: image_path,
			        last_time_reviewed: '',
			        status: 'unreviewed'

			    };
    id_record = id_record + 1;
    return result 
}

let getRecords = function (folder,file_path,file){
	var main_sheet = 'Sheet1'
	var workbook = new Excel.Workbook();
	workbook.xlsx.readFile(file_path).then(function() {
		var worksheet = workbook.getWorksheet(main_sheet);
	        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
	          if (rowNumber > 1){
		          var record = parseRecords(folder,file,row.values);
		          excelRecords.push(record);
	      	  }
	      	
	    });
		folder_quantity_count = folder_quantity_count+1
		if (folder_quantity == folder_quantity_count){
			console.log("generating output excel");
			outputExcel(excelRecords)
		}
	});
};

async function getExcelsRecords(records){

	fs.readdir(staticPath+"/input", function (err, folder) {
	    if (err) {
	        return console.log('Unable to scan directory: ' + err);
	    } 
	    folder_quantity = folder.length;
	    folder.forEach(function (folder) {
			var ff = staticPath+"/input/"+folder;
			fs.readdirSync(ff).forEach(file => {
			  if (path.extname(file) == ".xlsx") {
				    var ffd = "/input/"+folder;
				    var fff = ff+"/"+file;
				    getRecords(ffd,fff,file);
				}
			});
	    });
	});
};


async function outputExcel(records){
    
    var workbook = new Excel.Workbook();
    var file_name = moment().format('YYYY_MM_DDTHH:mm');
    var worksheet = workbook.addWorksheet("Datos");
	worksheet.columns = [
	 {header: 'Id', key: 'id'},
	 {header: 'File', key: 'file'}, 
	 {header: 'Date', key: 'date'},
     {header: 'Dmin Telecom', key: 'dmin_telecom'},
     {header: 'Norme', key: 'norme'},
     {header: 'Latitude Poste', key: 'lat_p'},
     {header: 'Longitude Poste', key: 'lon_p'},
     {header: 'Video Name', key: 'video_name'},
     {header: 'Video Time', key: 'video_time'},
     {header: 'Image', key: 'image'},
     {header: 'Image Location', key: 'image_path'},
     {header: 'Last Time Reviewed', key: 'last_time_reviewed'},
     {header: 'Status', key: 'status'}

	];
	records.forEach(function (record) {
	    var data = {
				        id: record['id'],
				        file: record['file'],
				        date: record['date'],
				        dmin_telecom: record['dmin_telecom'],
				        norme: record['norme'],
				        lat_p: record['lat_p'],
				        lon_p: record['lon_p'],
				        video_name: record['video_name'],
				        video_time: record['video_time'],
				        image: record['image'],
				        image_path: record['image_path'],
				        last_time_reviewed: record['last_time_reviewed'],
				        status: record['status']

				    };
		worksheet.addRow(data);
	})
	outputeExcelFile = staticPath+'/output/'+file_name+'.xlsx'
	await workbook.xlsx.writeFile(outputeExcelFile);
}


let clearExcels = function (){
	excelRecords = [];
	folder_quantity_count = 0;
	id_record = 1;
	console.log('generating new excel Workbook');
	getExcelsRecords();
}

app.listen(9091, () => {
  getExcelsRecords();
  console.log('Server listening on port 9091');
});


//setTimeout(function(){ editExcelRecord(1,'status');}, 3000);
//console.log(recordsExcels);