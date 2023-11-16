import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const LinkContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 70px;
  background-color: #000000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding:  5px 5px;
  border-radius: 8px;
  opacity: 100;
  transform: translateY(-15px);
  transition: opacity 0.3s, transform 0.3s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #f0f0f0;
  padding: 8px;
  transition: background-color 0.4s;

  &:hover {
    background-color: #222222;
  }
`;