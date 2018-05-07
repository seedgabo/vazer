import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import moment from "moment";
import $ from "jquery";
import "fullcalendar";
@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    $("#calendar").fullCalendar({
      events: [
        {
          title: "surgery",
          start: moment().add(1, "day"),
          end: moment().add(2, "day"),
          backgroundColor: "#1233ff"
        },
        {
          title: "clinic",
          start: moment().add(4, "day"),
          end: moment().add(6, "day"),
          backgroundColor: "#FF33FF"
        },
        {
          title: "Conference Week",
          start: moment().add(1, "week"),
          end: moment()
            .add(1, "week")
            .add(1, "day"),
          backgroundColor: "#FFCC33"
        }
      ],
      height: "auto"
    });
  }
}
