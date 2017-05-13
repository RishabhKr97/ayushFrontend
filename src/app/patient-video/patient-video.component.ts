import {Component, OnInit, ViewChild} from '@angular/core';
import {isNullOrUndefined, log} from "util";
import {VideoCallService} from "../video-call.service";

@Component({
  selector: 'app-patient-video',
  templateUrl: './patient-video.component.html',
  styleUrls: ['./patient-video.component.css']
})
export class PatientVideoComponent implements OnInit {
  @ViewChild('myVideo') myVideo: any;
  myId: String;
  otherId: string;
  apikey: string = 'ar0nk37sugx5stt9';
  peer;
  gotkey = false;
  doctorId: string = null;


  constructor(private videoService: VideoCallService) {

  }

  ngOnInit(): void {

  }

  onConnect() {
    let message = 'Message From' + this.myId;
    this.myId = this.peer.id;
    if (isNullOrUndefined(this.myId)) {
     // alert('Could Not connect Now!');
    }
    if (!isNullOrUndefined(this.otherId)) {
      let conn = this.peer.connect(this.otherId);
      conn.on('open', function () {
        conn.send(message);
      });
    }
    else {
     // alert('Key Null or Undefined!');
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

  onPatientCall() {
    this.videoService.recieveDoctorkey().subscribe(
      (data) => {
        console.log(data.room_key);
        if (!(data.room_key === null)) {
          console.log(data);
          this.doctorId = data.room_key;
          this.otherId = this.doctorId;
          this.gotkey = true;
        }
        else{
          alert("Doctor Not Present!")
        }

      }
    );

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

        this.onConnect();
        setTimeout(()=>{
          this.onVideo();
        },2000);
    }

}
