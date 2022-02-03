import React from "react";
import Portfolio from "./Portfolio";
import Promos from "./Promos";
import styled from "styled-components";

const Main = ({walletAddress, thirdWebTokens, sanityTokens}) => {
    return (
        <Wrapper>
            <Portfolio walletAddress={walletAddress} thirdWebTokens={thirdWebTokens} sanityTokens={sanityTokens}/>
            <Promos/>
        </Wrapper>

    )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
      display: none;
  }

  & div {
      border-radius: 0.4rem;
  }
`
