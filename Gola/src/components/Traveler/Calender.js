// import React, { useState } from "react";
// import format from "date-fns/format";
// import {
//   add,
//   parse,
//   eachDayOfInterval,
//   endOfMonth,
//   getDay,
//   isSameMonth,
//   isToday,
//   startOfToday,
// } from "date-fns";

// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// // Helper function to capitalize the first letter of a string
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// const Calendar = () => {
//   const [currMonth, setCurrMonth] = useState(() => format(today(), "MMM-yyyy"));
//   let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

//   const daysInMonth = eachDayOfInterval({
//     start: firstDayOfMonth,
//     end: endOfMonth(firstDayOfMonth),
//   });

//   const today = startOfToday();

//   const getPrevMonth = (event) => {
//     event.preventDefault();
//     const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
//     setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
//   };

//   const getNextMonth = (event) => {
//     event.preventDefault();
//     const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
//     setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
//   };

//   const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

//   const colStartClasses = [
//     "",
//     "col-start-2",
//     "col-start-3",
//     "col-start-4",
//     "col-start-5",
//     "col-start-6",
//     "col-start-7",
//   ];

//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         <p className="text-xl font-semibold">
//           {format(firstDayOfMonth, "MMMM yyyy")}
//         </p>
//         <div className="flex items-center gap-6 justify-evenly sm:gap-12">
//           <ChevronLeftIcon
//             className="w-6 h-6 cursor-pointer"
//             onClick={getPrevMonth}
//           />
//           <ChevronRightIcon
//             className="w-6 h-6 cursor-pointer"
//             onClick={getNextMonth}
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-6 mt-8 sm:gap-12 place-items-center">
//         {days.map((day, idx) => (
//           <div key={idx} className="font-semibold">
//             {capitalizeFirstLetter(day)}
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-6 mt-8 sm:gap-12 place-items-center">
//         {daysInMonth.map((day, idx) => (
//           <div key={idx} className={colStartClasses[getDay(day)]}>
//             <p
//               className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full hover:text-white ${
//                 isSameMonth(day, today()) ? "text-gray-900" : "text-gray-400"
//               } ${!isToday(day) && "hover:bg-blue-500"} ${
//                 isToday(day) && "bg-red-500 text-white"
//               }`}
//             >
//               {format(day, "d")}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;
