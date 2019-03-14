import styled from 'styled-components';

const HomeBanner = styled.header`
  background-size: cover;
  width: 100%;
  height: calc(100vh - 54px);
  background-image: url('/images/homeBanner.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .children {
    margin-top: 200px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;

export default HomeBanner;
