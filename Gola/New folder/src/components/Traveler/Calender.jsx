// import React from 'react';
// import { useState , useEffect} from 'react';
// import axios from 'axios';
//
// import {
//     Inject,
//     ScheduleComponent,
//     Day,
//     Week,
//     WorkWeek,
//     Month,
//     Agenda
// } from '@syncfusion/ej2-react-schedule';
//
// const Calender = () => {
//     const [events, setEvents] = useState([]);
//
//     // useEffect(() => {
//     //   // Fetch events from the Express.js API
//     //   axios.get("/events").then((response) => {
//     //     setEvents(response.data);
//     //   });
//     // }, []);
//
//   return (
//     <div className="m-[20px] shadow-lg rounded-[15px]">
//       <ScheduleComponent
//         currentView="Month"
//         className="rounded-[15px]"
//         readonly={true}
//         eventSettings={{ dataSource: events }}
//       >
//         {/* eventSetting use to add events from database */}
//         {/* readonly={true} use to Set the calendar to read-only mode */}
//         <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//       </ScheduleComponent>
//     </div>
//   );
// }
//
// export default Calender;
//
