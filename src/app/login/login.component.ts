import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "./login.service";
import {GlobalService} from "../global.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username;
  private pass;
  @ViewChild('id') checkbox;


  constructor(private service: LoginService, private idservice: GlobalService, private router: Router) {

  }

  ngOnInit() {
  }

  onSignIn() {

   let myCheck=this.checkbox.nativeElement;
    this.service.sendLoginDetails(this.username, this.pass).subscribe((data) => {
        if (data.message = 'Success') {
          console.log(data);
          this.idservice.setid(data.id);
          console.log(data.id, this.idservice.id);
          if(!myCheck.checked)
          this.router.navigate(['/patient', data.id,'home']);
          else{
            this.router.navigate(['/institute', '1']);
          }
        }

      }
    );
  }

}
