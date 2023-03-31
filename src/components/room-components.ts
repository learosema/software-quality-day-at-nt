import styled from "styled-components";

export const RoomCard = styled.div`
  background-color: #1d1d1d;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`

export const RoomTitle = styled.div`
  font-weight: bold;
  background-color: ${props => props.role === 'alert' ? '#E9454E' : '#5B4897'};
  padding: 0.75rem 0.75rem 0.5rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.role === 'alert' ? '#b7434b' : '#47367a'};
  }
`

export const RoomContent = styled.div`
  padding: 0.5rem 0.75rem 0.75rem;
`
