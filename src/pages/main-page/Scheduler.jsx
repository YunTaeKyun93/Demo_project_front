import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import classNames from "classnames/bind";
import styles from "./scheduler.module.scss";
const ss = classNames.bind(styles);
const Scheduler = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        color: "white",
        width: "500px",
        height: "500px",
        alignItems: "center",
        border: "1px solid white",
      }}
    >
      <div className={ss("userList")}>
        <div className={ss("top")}>
          <div className={ss("user-box-01")}>
            box1
          </div>
          <div className={ss("user-box-02")}>
            box2
          </div>
        </div>
        <div className={ss("bottom")}>
          <div className={ss("bottom-left")}>
            <div className={ss("user-box-03")}>
              box3
            </div>
            <div className={ss("user-box-04")}>
              box4
            </div>
          </div>
          <div className={ss("bottom-right")}>
            <div className={ss("user-box-05")}>
              box5
            </div>
            <div className={ss("user-search-more")}>
              •••
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
