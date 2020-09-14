import styled from 'styled-components'

export const AnimeCoverWrapper = styled.div`
  margin-top: 6px;

  img {
    width: 90px;
    height: 115px;
    border-radius: 3px;
  }

  .name {
    width: 90px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: white;
    font-size: 12px;
    margin-top: 2px;
  }
`