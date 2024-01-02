import { Component } from '@angular/core';
import {DateFunctions} from "@app/date/DateFunctions";
import {Dayjs} from "dayjs";

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {

  public dateNew: Dayjs = DateFunctions.new();
  public dateNewTimezoneBelgium: Dayjs = DateFunctions.convertToTimezone(
    DateFunctions.new(),
    "Europe/Brussels"
  );

  constructor() {
    // let dateNewTimezoneBelgium: Dayjs = DateFunctions.convertToTimezone(
    //   DateFunctions.new(),
    //   "Europe/Brussels"
    // );

    // console.log("dateNewTimezoneBelgium " + dateNewTimezoneBelgium.format("DD MMMM YYYY HH:mm:ss:SSS"));

    const tzLocal = "America/New_York"; // reassign to specific timezone - America/New_York (EST)
    // console.log("dateNewTimezoneBelgium new york" + dateNewTimezoneBelgium.tz(tzLocal).format("DD MMMM YYYY HH:mm:ss:SSS"));


  }



}
