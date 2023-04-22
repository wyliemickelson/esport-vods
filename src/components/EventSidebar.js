import styled from 'styled-components';
import Event from './Event';

const EventSidebar = ({ tournaments, currentTournamentId, setCurrentTournamentId, isMobile, eventClick }) => {

  const defaultClick = (t) => { setCurrentTournamentId(t._id) }

  eventClick = eventClick ?? defaultClick

  return (
    <StyledEventSideBar isMobile={isMobile}>
      {!isMobile && <h3>Events</h3>}
      <div>
      {tournaments.map(t => {
        const selected = t._id === currentTournamentId
        return <Event tournament={t} selected={selected} onClick={eventClick} />
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
  top: 60px;
  min-width: 320px;
  width: 25%;
  background-color: var(--bg-color-dark-alt);
  overflow-y: auto;
  height: calc(100vh - 61px);
  color: var(--text-color-2);

  ${props => props.isMobile && `
    width: 100%;
    height: auto;
  `}
`