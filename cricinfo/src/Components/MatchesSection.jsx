import React, { useState, useEffect } from 'react';
import '../css/MatchesSection.css';

const MatchesSection = () => {
  // Set initial countdown timer state
  const [timeLeft, setTimeLeft] = useState({});
  
  // Example tournament data for future matches, results, etc.
  const futureMatches = [
    { date: 'September 30, 2024', time: '3:00 PM', teams: 'Tigers vs Sharks' },
    { date: 'October 7, 2024', time: '5:00 PM', teams: 'Kangaroos vs Bulls' },
    { date: 'October 9, 2024', time: '5:30 PM', teams: 'Budgies vs Kangaroos' },
  ];
  
  const completedMatches = [
    { date: 'September 21, 2024', teams: 'Foxes vs Rams', score1:'129/6',score2:'131/3', result: 'Foxes lost' },
    { date: 'September 21, 2024', teams: 'Tigers  vs Geckos', score1:'129/6',score2:'131/3',result: 'Tigers lost' },
    { date: 'September 15, 2024', teams: 'Flamingos vs Seahorses', score1:'129/6',score2:'131/3', result: 'Flamingos won' },
    { date: 'September 15, 2024', teams: 'Flamingos vs Seahorses', score1:'129/6',score2:'131/3', result: 'Flamingos won' }
  ];

  // Set target date for next match
  const nextMatchDate = new Date('September 30, 2024 15:00:00').getTime();

  // Countdown calculation
  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextMatchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [nextMatchDate]);

  return (
    <div className="matches-section">
      
      {/* Future Matches */}
      <div className="column">
        <h2>Fixtures</h2>
        {futureMatches.map((match, index) => (
          <div key={index} className="match-item">
            <p>{match.date}</p>
            <p><strong>{match.time}</strong></p>
            <p>{match.teams}</p>
          </div>
        ))}
      </div>

      <div className="matches-section">
      {/* Completed Matches */}
      <div className="column">
        <h2>Results</h2>
        {completedMatches.map((match, index) => (
          <div key={index} className="result-item">
            <p className="result-date">{match.date}</p>
            <div className="score-box">
              <div className="score">
                <p>{match.score1}</p>
              </div>
              <p>-</p>
              <div className="score">
                <p>{match.score2}</p>
              </div>
            </div>
            <p className="teams-name"><h1>{match.teams}</h1></p>
          </div>
        ))}
      </div>
    </div>

      {/* Next Match Countdown and Calendar */}
      <div className="column next-match-column">
        <h2>Next Match</h2>
        <div className="countdown-timer">
          <p>{timeLeft.days} <span>Days</span>
          {timeLeft.hours} <span>Hours</span>
          {timeLeft.minutes} <span>Minutes</span>
          {timeLeft.seconds} <span>Seconds</span></p>
        </div>
        <div className="calendar">
          <h3>September 2024</h3>
          <table>
            <thead>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
              </tr>
              <tr>
                <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
              </tr>
              <tr>
                <td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
              </tr>
              <tr>
                <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td>
              </tr>
              <tr>
                <td>28</td><td>29</td><td>30</td><td></td><td></td><td></td><td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default MatchesSection;
