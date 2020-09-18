import styled from 'styled-components'

export const PlayerWrapper = styled.div`

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
      font-size: 14px;
      color: #ff5777;
    }
  }

  .tab {
    width: 90%;
    margin: 5px auto;
    display: flex;
    font-size: 13px;
    color: #aaa;
    .introduce {
      padding-bottom: 3px;
    }

    .comment {
      margin-left: 30px;
      padding-bottom: 3px;
    }

    .active {
      font-size: 15px;
      color: white;
      border-bottom: 2px solid #ff5777;
    }
  }
  
  .totalPlayer {
    width: 90%;
    margin: 5px auto;
    margin-top: 10px;
    font-size: 12px;
    color: #aaa;

    .play-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .play-index {
      width: 100%;
      height: 45px;
      display: flex;
      white-space: nowrap;
      text-align: center;
      overflow-x: scroll;
      overflow-y: hidden;

      ::-webkit-scrollbar{display:none}

      .item {
        height: 30px;
        line-height: 30px;
        border: 1px solid gray;
        padding: 0 5px;
        color: #ddd;
        background: rgba(0,0,0,.1);
        margin-top: 5px;
        margin-right: 10px;
      }

      .index-active {
        border:1px solid #ff5777;
        color: #ff5777;
      }
    }

    .play-title-spread {
      width: 100%;
      display: flex;
      font-size: 15px;
      justify-content: space-between;
    }

    .play-index-spread {
      width: 100%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      text-align: center;
      margin-bottom: 56px;
      
      .spread-item {
        font-size: 13px;
        border: 1px solid gray;
        width: 30%;
        height: 45px;
        line-height: 45px;
        color: #ddd;
        margin-top: 10px;
        background: rgba(0,0,0,.1);
      }

      .index-active {
        border:1px solid #ff5777;
        color: #ff5777;
      }
    }
  }

  .video-react .video-react-big-play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .introduce-enter, .introduce-appear {
    opacity: 0;
    transform: scale(.6);
  }

  .introduce-enter-active, .introduce-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms;
  }

  .introduce-exit {
    opacity: 1;
  }

  .introduce-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  .introduce-exit-done {
    opacity: 0;
  }

  .spread-enter, .spread-appear {
    opacity: 0;
    transform: scale(.6);
  }

  .spread-enter-active, .spread-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms;
  }

  .spread-exit {
    opacity: 1;
    transform: scale(1);
  }

  .spread-exit-active {
    opacity: 0;
    transform: scale(.6);
    transition: opacity 300ms;
  }

  .spread-exit-done {
    opacity: 0;
  }
`