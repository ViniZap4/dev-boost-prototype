import styled from "styled-components";


export const Container = styled.div`
  margin: 0.3vh 0.9vw;
  .taskButton{
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconBox{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #181818;
      border-radius: 0.9vh;

      img{
        margin: 0.63vh;
        height: 4.5vh;
        
      }
    }
    .title{
      display: block;
      position: absolute;
      top: -6vh;
      background: #181818;
      padding: 0vh;
      color: #fff;
      border-radius: 0.6vh;
      font-size: 0px;
    }

    &:hover{
      .iconBox{
        transform: scale(1.2) translateY(-0.9vh);

      }
      .title{
        padding: 0.9vh;

        font-size: 1.8vh;
        
      }
    }

  }
`