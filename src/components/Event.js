// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import { FaVideo, FaGlobe, FaCalendarAlt, FaCog } from 'react-icons/fa';
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
// import './Event.css';

// const Event = () => {
//   const [date, setDate] = useState(new Date());
//   const [is12HourFormat, setIs12HourFormat] = useState(true);

//   // Array for demo purposes, replace this with actual API response
//   const timeSlots = [
//     '2:15pm', '2:30pm', '2:45pm', '3:00pm', '3:15pm',
//     '3:30pm', '3:45pm', '4:00pm', '4:15pm', '4:30pm',
//   ];

//   // Toggle 12-hour / 24-hour format
//   const toggleTimeFormat = () => {
//     setIs12HourFormat(!is12HourFormat);
//   };

//   // Handle calendar date change
//   const onDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   return (
//     <div className="event-container">
//       <div className="event-sidebar">
//         <h3>Skitbit International</h3>
//         <h1>High-End 3D Visuals | 15 Minute Call</h1>
//         <div className="event-details">
//           <p><span>15m</span></p>
//           <p><FaVideo /> Zoom Video</p>
//           <p><FaGlobe /> Asia/Kolkata</p>
//         </div>
//       </div>

//       <div className="calendar-section">
//         <div className="calendar-header">
//           <IoIosArrowBack className="calendar-nav" />
//           <h2>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</h2>
//           <IoIosArrowForward className="calendar-nav" />
//         </div>
        
//         <Calendar
//           onChange={onDateChange}
//           value={date}
//           nextLabel={<IoIosArrowForward />}
//           prevLabel={<IoIosArrowBack />}
//           calendarType="ISO 8601"  // Corrected Calendar type
//           className="custom-calendar"
//         />
//       </div>

//       <div className="time-slots">
//         <div className="toggle-buttons">
//           <button
//             className={`toggle-btn ${is12HourFormat ? 'active' : ''}`}
//             onClick={() => setIs12HourFormat(true)}>
//             12h
//           </button>
//           <button
//             className={`toggle-btn ${!is12HourFormat ? 'active' : ''}`}
//             onClick={() => setIs12HourFormat(false)}>
//             24h
//           </button>
//         </div>
        
//         <div className="slots">
//           {timeSlots.map((slot, index) => (
//             <div key={index} className="time-slot">
//               {slot}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="calendar-controls">
//         <FaCog className="icon-settings" />
//         <FaCalendarAlt className="icon-calendar" />
//       </div>
//     </div>
//   );
// };

// export default Event;
