import React, { useState } from 'react';
import '../css/Main.css';

const Main = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { date: '2024-10-01', title: 'Tournament A', location: 'Stadium X', color: '#a2d9ff' }, 
    { date: '2024-10-15', title: 'Tournament B', location: 'Stadium Y', color: '#a2f0a2' }, 
    { date: '2024-11-05', title: 'Tournament C', location: 'Stadium Z', color: '#ff9f9f' },
    { date: '2024-11-05', title: 'Tournament D', location: 'Stadium A', color: '#ff9f9f' },
  ];

  const handleRegister = (event) => {
    setSelectedEvent(event);;
  };

  return (
    <main className="main-content">
      <section id="home" className="hero-section">
        <div className="hero-image">
          {/* Insert SVG or Image here */}
        </div>
      </section>

      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-container">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-box"
              style={{ backgroundColor: event.color }}
              onClick={() => handleRegister(event)}
            >
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
