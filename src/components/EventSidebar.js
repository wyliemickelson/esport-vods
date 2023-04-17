import styled from 'styled-components';

const EventSidebar = ({ tournaments, setCurrentTournamentId }) => {
  return (
    <StyledEventSideBar>
      <h3>Events</h3>
      <div>
      {tournaments.map(t => 
      <div onClick={() => setCurrentTournamentId(t._id)}>
        <p>{t.details.title}</p>
      </div>)}
      </div>
    </StyledEventSideBar>
  )
}

export default EventSidebar

const StyledEventSideBar = styled.div`
  width: 30%;

  p {
    &:hover {
    cursor: pointer;
  }
  }
`