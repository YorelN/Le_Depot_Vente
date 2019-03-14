import React from 'react';
import styled, { css } from 'styled-components';
import MUIButton from '@material-ui/core/Button';

const BaseButton = ({
  validation,
  gradient,
  basic,
  light,
  active,
  disabled,
  informations,
  children,
  search,
  ...rest
}) => {
  return <MUIButton {...rest}>{children}</MUIButton>;
};
const Button = styled(BaseButton)`
  && {
    white-space: nowrap;
    font-size: 12px;

    ${({ light }) =>
      light &&
      css`
        color: #848484;
        &:hover {
          color: #848484;
        }
      `};

    ${({ search }) =>
      search &&
      css`
        height: 56px;
        margin-left: 10px;
      `};

    ${props =>
      props.active &&
      css`
        background-color: rgba(84, 76, 255, 0.08);
        color: #544cff;
        &:hover {
          background-color: rgba(84, 76, 255, 0.08);
          color: #544cff;
        }
      `};

    ${props =>
      props.gradient &&
      css`
        background: linear-gradient(to right, #5571fb, #7749ff);
        color: #fff;
      `};

    ${props =>
      props.validation &&
      css`
        background: #534cfb;
        color: #fff;

        &:hover {
          background: #534cfb;
          color: #fff;
        }
      `};

    ${props =>
      props.disabled &&
      css`
        background: inherit;
        color: inherit;

        &:hover {
          background: inherit;
        }
      `};
    ${props =>
      props.basic &&
      css`
        background: transparent;
        color: #4b46e8;
      `};

    ${props =>
      props.informations &&
      css`
        background: #fff;
        color: #4b46e8;
        &:hover {
          background: #fff;
        }
      `};
  }
`;

export default Button;
