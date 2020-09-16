import styled from 'styled-components'

export const MoreAnimeWrapper = styled.div`


  .title {
    position: relative;
    text-align: center;
    width: 90%;
    margin: 5px auto;
    height: 30px;
    line-height: 30px;

    .icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .anime {
      font-size: 15px;
      color: white;
      color: #ff5777;
    }
  }

  .tabControl {
    width: 95%;
    margin: 5px auto;

    div {
      width: 100%;
      display: flex;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      margin: 5px 0;

      ::-webkit-scrollbar {display: none}

      .active {
        border: 1px solid #ff5777;
        border-radius: 10px;
        color: #ff5777;
        padding: 0 4px;
      }

      span {
        font-size: 13px;
        color: white;
        margin-left: 10px;
        padding: 0 4px;
      }
    }
  }

  .content {
    width: 90%;
    margin: 10px auto;
    display: flex;
    flex-flow: wrap;

    .animeCover {
      margin-left: 6px;
      margin-top: 5px;
    }
  }
`