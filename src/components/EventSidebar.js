import styled from 'styled-components';
import Event from './Event';

const EventSidebar = ({ tournaments, currentTournamentId, setCurrentTournamentId }) => {
  return (
    <StyledEventSideBar>
      <h3>Events</h3>
      <div>
      {tournaments.map(t => {
        const selected = t._id === currentTournamentId
        return <Event tournament={t} selected={selected} setCurrentTournamentId={setCurrentTournamentId} />
      }
      )}
      </div>
    </StyledEventSideBar>
  )
}

export default EventSidebar

const StyledEventSideBar = styled.div`
  h3 {
    padding: 1rem;
    border-bottom: 2px solid rgba(211, 211, 211, 0.1);
    width: 100%;
  }
  position: sticky;
  top: 73px;
  width: 100%;
  max-width: 30%;
  background-color: var(--bg-color-dark-alt);
  overflow-y: auto;
  height: calc(100vh - 73px);
  color: var(--text-color-2);
`