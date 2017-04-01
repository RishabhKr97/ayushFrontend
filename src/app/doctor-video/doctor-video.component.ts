import {Component, OnInit, ViewChild} from '@angular/core';
import {isNullOrUndefined} from "util";
import {VideoCallService} from "../video-call.service";

@Component({
  selector: 'app-doctor-video',
  templateUrl: './doctor-video.component.html',
  styleUrls: ['./doctor-video.component.css']
})
export class DoctorVideoComponent implements OnInit {

  @ViewChild('myVideo') myVideo: any;
  myId: string;
  otherId: string;
  apikey: string = 'ar0nk37sugx5stt9';
  peer;
  keysent = false;


  constructor(private videoService:VideoCallService) {

  }

  ngOnInit(): void {



  }

  onConnect() {
    let myService=this.videoService;
    let message = 'Message From' + this.myId;
    this.myId = this.peer.id;
    let doctorId=this.myId;
    if (isNullOrUndefined(this.myId)) {
      alert('Could Not connect Now!');
    }
    if (!isNullOrUndefined(this.otherId)) {
      let conn = this.peer.connect(this.otherId);
      conn.on('open', function () {
       // conn.send(message);
        myService.sendDoctorKey(doctorId);
      });
    }
    else {
      //TODO do something about no instant connection
    }
  }

  onVideo() {
    let video = this.myVideo.nativeElement;
    let local_peer = this.peer;
    let fname = this.otherId;
    let n = <any>navigator;
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    n.getUserMedia({video: true, audio: true}, function (stream) {
      let call = local_peer.call(fname, stream);
      call.on('stream', function (remoteStream) {
        video.src = URL.createObjectURL(remoteStream);
        video.play();
      });
    }, function (err) {
      console.log('Failed to get local stream', err);
    });

  }
  onStarChat(){
    this.keysent=true;
    let video = this.myVideo.nativeElement;
    this.peer = new Peer({key: this.apikey});
    let n = <any>navigator;
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    this.peer.on('call', function (call) {
      n.getUserMedia({video: true, audio: true}, function (stream) {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', function (remoteStream) {
          video.src = URL.createObjectURL(remoteStream);
          video.play();
        });
      }, function (err) {
        console.log('Failed to get local stream', err);
      });
    });
    this.peer.on('connection', function (conn) {
      conn.on('data', function (data) {
        // Will print 'your-message '
        console.log(data);
      });
    });

  }
}
