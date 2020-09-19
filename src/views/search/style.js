import styled from 'styled-components'

export const SearchWrapper = styled.div`

  .tab {
    display: flex;
    width: 100%;
    height: 49px;
    line-height: 49px;

    .anticon-left {
      margin-top: 15px;
      margin-left: 8px;
    }

    .search-input {
      width: 75%;
      height: 27px;
      margin: 12px 8px;
      border-radius: 15px;
      background: gray;
    }

    .ant-input {
      font-size: 12px;
      color: #bbb;
    }

    .tab-search {
      color: #ff5777;
    }
  }
  
  .search {
    display: flex;
    margin: 10px;

    img {
      width: 75px;
      height: 105px;
      border-radius: 3px;
    }

    .content {
      margin-left: 8px;

      .name {
        padding-top: 5px;
        font-size: 13px;
        color: white;
      }

      .desc {
        padding-top: 10px;
        font-size: 11px;
        color: #aaa;
      }
    }
  }

  .noResult {
    width: 90%;
    margin: 15px;
  }

`