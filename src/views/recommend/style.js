import styled from 'styled-components'

export const RecommendWrapper = styled.div`

  .recommend {
    width: 100%;
    height: 45px;
    display: flex;
    line-height: 45px;
    overflow-x: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar{display:none}

    .recommend-item {
      margin-right: 20px;
    }

    
  }


  a {
    display: inline-block;
    white-space:nowrap;
    color: #bbb;
    height: 40px;
    font-size: 13px;
    text-decoration: none;
    
    :hover {
      cursor: pointer;
    }

    &.active {
      color: white;
      font-size: 15px;
      border-bottom: 2px solid #ff5777;
    }

  }

  .search {
    width: 100%;
    height: 49px;

    .search-input {
      width: 90%;
      height: 27px;
      margin: 10px 15px;;
      border-radius: 15px;
      background: gray;
    }

    .ant-input {
      font-size: 12px;
      color: #bbb;
    }
  }
`