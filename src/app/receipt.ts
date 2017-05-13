export class Receipt {
  constructor(public id:number,
              public first_name:string,
              public last_name:string,
              public mobile:number,
              public email:string,
              public doctor_name:string,
              public department:string,
              public speciality_name:string,
              public name:string,
              public rate:number,
              public BeginTime:Date,
              public EndTime:Date,
              public prescription:string

  ){

  }

}
