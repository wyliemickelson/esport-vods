import React from 'react'
import Event from './Event'
import EventSidebar from './EventSidebar'

const EventListDropdown = ({ tournaments, setCurrentTournamentId, currentTournamentId, setEventDropdownOpen, eventDropdownOpen }) => {
  const currentTournament = tournaments.find(t => t._id === currentTournamentId)

  const handleEventClick = (t) => {
    setEventDropdownOpen(!eventDropdownOpen)
    setCurrentTournamentId(t._id)
  }

  return (
    <>
      {currentTournament && <Event isMobile={true} tournament={currentTournament} onClick={() => setEventDropdownOpen(!eventDropdownOpen)} />}
      {eventDropdownOpen && <EventSidebar isMobile={true} tournaments={tournaments} currentTournamentId={currentTournamentId} setCurrentTournamentId={setCurrentTournamentId} eventClick={handleEventClick} />}
    </>
  )
}

export default EventListDropdown