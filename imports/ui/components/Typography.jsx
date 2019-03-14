import React from 'react';

import styled, { css } from 'styled-components';

const StyledTitle = styled.h1`
  && {
    color: #fff;
    font-size: 58px;
    font-weight: ${props => props.weight};
  }
`;

const StyledParagraph = styled.p`
  && {
    color: #fff;
    font-size: 19px;

    font-weight: ${props => props.weight};
  }
`;

function Typography({ variant, weight, children }) {
  if (variant === 'h1')
    return <StyledTitle weight={weight}>{children}</StyledTitle>;
  if (variant === 'p')
    return <StyledParagraph weight={weight}>{children}</StyledParagraph>;
}

export default Typography;
