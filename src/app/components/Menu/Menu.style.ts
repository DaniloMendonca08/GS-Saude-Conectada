import { colors } from '@/styles/colors';
import { lato } from '@/styles/globalStyles';
import styled from 'styled-components';

export const SpanMenu = styled.span`
  color: ${colors.primary.grayBlue};
`

export const MenuContainer = styled.div`
  position: relative;
  cursor: pointer;
  font-family: ${lato.style.fontFamily};
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  position: absolute;
  top: 100%;
  left: 0%;
  width: 6vw;
  background-color: ${colors.primary.blueStartingHeader};
  border:1px solid ${colors.primary.grayBlue};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 5px;
  border-radius: 8px;
  opacity: 100;
  transform: translateY(1px);
  transition: opacity 0.3s, transform 0.3s;
`;

export const MenuItem = styled.a`
  color: ${colors.primary.grayBlue};
  padding: 1px;
  transition: background-color 0.6s;
  border-radius: 6px;

  &:hover {
    background-color: ${colors.primary.grayBlue};
    color: ${colors.primary.blueStartingHeader};
  }
`;