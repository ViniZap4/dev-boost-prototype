import styled from "styled-components";

interface Props{
  width: any;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  min-width: 30vw;
  background-color: #363636;
  box-shadow: 0 0 6vh #36363677;
  border-radius: 0.9vh;
  padding: 0.63vh 0vh;
  bottom: 1.8vh;
  left: calc(50vw - (${props => `${props.width}px` || '30vw'}) / 2);
  animation: slide-in-burred-bottom 0.9S  cubic-bezier(0.2, 1, 0.3, 1.0) both;
  max-width: 90vw;
`