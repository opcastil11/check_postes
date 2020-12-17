import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-logs-view',
  templateUrl: './logs-view.component.html',
  styleUrls: ['./logs-view.component.css'],
})
export class LogsViewComponent implements OnInit, OnDestroy {
  button_status: string;
  button_norme: string;
  filterByStatus: string;
  filterByNorme: string;
  logs: any;
  logs_to_show: any;
  status_s: any;
  status_edit: any;
  normes: any;
  normes_edit: any;
  displayModal = false;
  currentLog: any;
  intervalId: any;
  corsHeaders:any;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    // this.getInitLogs();
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:9091/'
    });
    this.logs = [];
    this.filterByStatus = "All";
    this.filterByNorme = "All";
    this.button_status = "All";
    this.button_norme = "All";
    this.status_s = ["All","reviewed","unreviewed"];
    this.status_edit = ["reviewed","unreviewed"];
    this.normes = ["All","Fuera de norma","En norma"];
    setTimeout(function(){ location.reload(); }, 1200000);
    const fetchResponse = await fetch('http://localhost:9091/records');
    const responseObject = await fetchResponse.json();
    this.logs = responseObject;
    this.logs_to_show = this.logs;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  onImgClick(value: string) {
    this.currentLog = this.logs_to_show.filter((log) => log.id === value)[0];
    this.displayModal = true;
  }

  onCloseClick() {
    this.displayModal = false;
    this.currentLog = undefined;
  }

  formatId(value: string){
    return "link";
  };

  SetfilterLogsByStatus(value: any){
    this.filterByStatus = value;
    this.filterLogs();
  };

  SetfilterLogsByNorme(value: any){
    this.filterByNorme = value;
    this.filterLogs();
  };


  filterLogs(){
    if (this.filterByStatus === "All" && this.filterByNorme === "All"){
      var filtered =  this.logs;
      this.button_status = "All";
      this.button_norme = "All";
    }else{
      if (this.filterByNorme === "All"){
        var filtered = this.logs.filter(log => log.status == this.filterByStatus);
      }else if (this.filterByStatus === "All"){
        var filtered = this.logs.filter(log => log.norme == this.filterByNorme);
      }else{
        var filtered = this.logs.filter(log => log.status == this.filterByStatus).filter(log => log.norme == this.filterByNorme);
      }
      this.button_status = this.filterByStatus;
      this.button_norme = this.filterByNorme;
    }
    this.logs_to_show = filtered;
  };

  errorImage(image: any){
    image.src = "http://localhost:9091/images/no_image.png"
  };

  pathImage(value: string){
    if (value == ''){
      return "http://localhost:9091/images/no_image.png"
    }else{
      var path = "http://localhost:9091/images?image_path="+value;
      console.log(path);
      return path;
    }
  };

  editStatusLog(log: any, status: string){
    var id = log.id;
    var requestOptions = {                                                                                                                                                                                 
      headers: this.corsHeaders, 
    };
    var path = 'http://localhost:9091/records/'+id+'?type=status&value='+status;     
    this.http.put<any>(path, requestOptions).subscribe(data => {
      var log_d = this.logs.filter(log => log.id == id);
      log_d.status = data[13];
      log.status = data[13];
      log_d.last_time_reviewed = data[12];
      log.last_time_reviewed = data[12];
      this.filterLogs(); 
    },error => {
        console.error('There was an error!', error);
    })

  };

  editDminLog(log: any, input_dmin_telecom:any){
    var id = log.id;
    var dmin_telecom = input_dmin_telecom.value;
    var requestOptions = {                                                                                                                                                                                 
      headers: this.corsHeaders, 
    };
    var path = 'http://localhost:9091/records/'+id+'?type=dmin_telecom&value='+dmin_telecom; 
    this.http.put<any>(path, requestOptions).subscribe(data => {
      var log_d = this.logs.filter(log => log.id == id);
      log_d.dmin_telecom = data[4];
      log.dmin_telecom = data[4];
      log_d.norme = data[5];
      log.norme = data[5];
      log_d.last_time_reviewed = data[12];
      log.last_time_reviewed = data[12];
      this.filterLogs();
    },error => {
        console.error('There was an error!', error);
    })

  };

  deleteRecord(log: any){
    var id = log.id;
    var requestOptions = {                                                                                                                                                                                 
      headers: this.corsHeaders, 
    };
    var path = 'http://localhost:9091/records/'+id; 
    this.http.delete<any>(path, requestOptions).subscribe(data => {
      var log_d = this.logs.filter(log => log.id == id);
      // log_d.dmin_telecom = data[4];
      // log.dmin_telecom = data[4];
      // log_d.norme = data[5];
      // log.norme = data[5];
      // log_d.last_time_reviewed = data[12];
      // log.last_time_reviewed = data[12];
      this.filterLogs();
    },error => {
        console.error('There was an error!', error);
    })
  };

  async clearExcel(){
    await fetch('http://localhost:9091/clear'); 
    console.log("clearExcel");
    setTimeout(function(){ location.reload();}, 5000);
  };
}
