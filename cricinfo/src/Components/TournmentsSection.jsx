import React, { useState } from 'react';
import '../css/TournamentsSection.css';

const tournaments = [
  {
    id: 1,
    name: 'Champions League',
    image: 'https://imgs.search.brave.com/zNoJR7FwRgBmSeDhqfnlHzFhsn1e-Gy_d8ZC-_kO1Ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEudGhlYXRo/bGV0aWMuY29tL2Nk/bi1jZ2kvaW1hZ2Uv/d2lkdGg9MTkyMCxx/dWFsaXR5PTc1LGZv/cm1hdD1hdXRvL2h0/dHBzOi8vY2RuLW1l/ZGlhLnRoZWF0aGxl/dGljLmNvbS9yRW1W/NlZEbGdPVHhfeTFH/SWlxc0Z6cTZEXzE0/NDB4OTYwLmpwZw',
    description: 'The UEFA Champions League is an annual club football competition.',
  },
  {
    id: 2,
    name: 'Europa League',
    image: 'https://imgs.search.brave.com/MOFWOs2HT9N5eFeS9JbOco42x6BerkQxtYGd4Q-Uffw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlYXRobGV0aWMu/Y29tL2Nkbi1jZ2kv/aW1hZ2Uvd2lkdGg9/MTkyMCxxdWFsaXR5/PTc1LGZvcm1hdD1h/dXRvL2h0dHBzOi8v/Y2RuLnRoZWF0aGxl/dGljLmNvbS9hcHAv/dXBsb2Fkcy8yMDI0/LzA4LzI2MDUzOTE3/L0dldHR5SW1hZ2Vz/LTIxNTY5NTc0MzMt/MTAyNHg1OTYuanBn',
    description: 'The UEFA Europa League is an annual football club competition.',
  },
  {
    id: 3,
    name: 'FIFA World Cup',
    image: 'https://imgs.search.brave.com/LeT3qNwjbHwbtUutpT5p7g860n6g5D9ADLh7NV0_jgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzEvMjIyNzMx/LTEzOC00NTZDRDcy/NC9kaWQteW91LWtu/b3ctRklGQS1Xb3Js/ZC1DdXAtc29jY2Vy/LmpwZz93PTgwMCZo/PTQ1MCZjPWNyb3A',
    description: 'The FIFA World Cup is an international association football competition.',
  },
  {
    id: 1,
    name: 'Champions League',
    image: 'https://imgs.search.brave.com/zNoJR7FwRgBmSeDhqfnlHzFhsn1e-Gy_d8ZC-_kO1Ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEudGhlYXRo/bGV0aWMuY29tL2Nk/bi1jZ2kvaW1hZ2Uv/d2lkdGg9MTkyMCxx/dWFsaXR5PTc1LGZv/cm1hdD1hdXRvL2h0/dHBzOi8vY2RuLW1l/ZGlhLnRoZWF0aGxl/dGljLmNvbS9yRW1W/NlZEbGdPVHhfeTFH/SWlxc0Z6cTZEXzE0/NDB4OTYwLmpwZw',
    description: 'The UEFA Champions League is an annual club football competition.',
  },
  {
    id: 2,
    name: 'Europa League',
    image: 'https://imgs.search.brave.com/MOFWOs2HT9N5eFeS9JbOco42x6BerkQxtYGd4Q-Uffw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlYXRobGV0aWMu/Y29tL2Nkbi1jZ2kv/aW1hZ2Uvd2lkdGg9/MTkyMCxxdWFsaXR5/PTc1LGZvcm1hdD1h/dXRvL2h0dHBzOi8v/Y2RuLnRoZWF0aGxl/dGljLmNvbS9hcHAv/dXBsb2Fkcy8yMDI0/LzA4LzI2MDUzOTE3/L0dldHR5SW1hZ2Vz/LTIxNTY5NTc0MzMt/MTAyNHg1OTYuanBn',
    description: 'The UEFA Europa League is an annual football club competition.',
  },
  {
    id: 3,
    name: 'FIFA World Cup',
    image: 'https://imgs.search.brave.com/LeT3qNwjbHwbtUutpT5p7g860n6g5D9ADLh7NV0_jgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzEvMjIyNzMx/LTEzOC00NTZDRDcy/NC9kaWQteW91LWtu/b3ctRklGQS1Xb3Js/ZC1DdXAtc29jY2Vy/LmpwZz93PTgwMCZo/PTQ1MCZjPWNyb3A',
    description: 'The FIFA World Cup is an international association football competition.',
  },
  {
    id: 1,
    name: 'Champions League',
    image: 'https://imgs.search.brave.com/zNoJR7FwRgBmSeDhqfnlHzFhsn1e-Gy_d8ZC-_kO1Ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEudGhlYXRo/bGV0aWMuY29tL2Nk/bi1jZ2kvaW1hZ2Uv/d2lkdGg9MTkyMCxx/dWFsaXR5PTc1LGZv/cm1hdD1hdXRvL2h0/dHBzOi8vY2RuLW1l/ZGlhLnRoZWF0aGxl/dGljLmNvbS9yRW1W/NlZEbGdPVHhfeTFH/SWlxc0Z6cTZEXzE0/NDB4OTYwLmpwZw',
    description: 'The UEFA Champions League is an annual club football competition.',
  },
  {
    id: 2,
    name: 'Europa League',
    image: 'https://imgs.search.brave.com/MOFWOs2HT9N5eFeS9JbOco42x6BerkQxtYGd4Q-Uffw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlYXRobGV0aWMu/Y29tL2Nkbi1jZ2kv/aW1hZ2Uvd2lkdGg9/MTkyMCxxdWFsaXR5/PTc1LGZvcm1hdD1h/dXRvL2h0dHBzOi8v/Y2RuLnRoZWF0aGxl/dGljLmNvbS9hcHAv/dXBsb2Fkcy8yMDI0/LzA4LzI2MDUzOTE3/L0dldHR5SW1hZ2Vz/LTIxNTY5NTc0MzMt/MTAyNHg1OTYuanBn',
    description: 'The UEFA Europa League is an annual football club competition.',
  },
  {
    id: 3,
    name: 'FIFA World Cup',
    image: 'https://imgs.search.brave.com/LeT3qNwjbHwbtUutpT5p7g860n6g5D9ADLh7NV0_jgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzEvMjIyNzMx/LTEzOC00NTZDRDcy/NC9kaWQteW91LWtu/b3ctRklGQS1Xb3Js/ZC1DdXAtc29jY2Vy/LmpwZz93PTgwMCZo/PTQ1MCZjPWNyb3A',
    description: 'The FIFA World Cup is an international association football competition.',
  },
  // Add more tournaments as needed
];

const TournamentsSection = () => {
  const [hoveredTournament, setHoveredTournament] = useState(tournaments[0]);

  const handleMouseEnter = (tournament) => {
    setHoveredTournament(tournament);
  };

  return (
    <div className="tournaments-section">
      <div className="tournament-content">
        {/* Left side: Tournament Image and Details */}
        <div className="tournament-image-section">
          <h3>{hoveredTournament.name}</h3>
          <img src={hoveredTournament.image} alt={hoveredTournament.name} />
          <p>{hoveredTournament.description}</p>
        </div>

        {/* Right side: Tournament List */}
        <div className="tournament-list-section">
          <ul className="tournament-list">
            {tournaments.map((tournament) => (
              <li
                key={tournament.id}
                className="tournament-item"
                onMouseEnter={() => handleMouseEnter(tournament)}
              >
                {tournament.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TournamentsSection;
