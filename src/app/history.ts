export class IHistory {
  constructor(public patient_id: number,
              public date: Date,
              public BeginTime: Date,
              public EndTime: Date,
              public mode: boolean,
              public status: number,
              public id: number) {

  }
}
