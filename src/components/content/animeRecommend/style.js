import styled from 'styled-components'

export const AnimeRecommendWrapper = styled.div`
  width: 90%;
  margin: 10px auto;

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    .type {
      color: white;
      font-size: 13px;
    }

    .more {
      color: #aaa;
      font-size: 12px;
    }
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
`