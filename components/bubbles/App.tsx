import styled from "styled-components";
import dynamic from "next/dynamic";

const BubbleArt = dynamic(() => import("./Scene"), {
  ssr: false,
});

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
  max-height: 1024px;
  height: 100%;
  width: 100%;
  position: relative;
  flex: 1;
`;

const Header = styled.div`
  padding: 40px;
  position: absolute;
  bottom: 0;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.03em;
  margin: 0;
  padding: 40px;

  color: white;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const App = () => {
  return (
    <AppContainer>
      <Content>
        <BubbleArt />
        <Header>
          <Name>
            Andrew Ho
            <br />
            <Description>Software engineer</Description>
          </Name>
        </Header>
      </Content>
    </AppContainer>
  );
};
