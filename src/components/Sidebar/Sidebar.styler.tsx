import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #0e0e10;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const TopSection = styled.div``;

export const LogoBox = styled.div`
  border: 1px solid #ffffff22;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ffffff44;
  margin: 20px 0;
`

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 12px;
  margin-bottom: 6px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff11;
    border-radius: 8px;
  }

  svg {
    font-size: 20px;
  }
`;

export const SectionTitle = styled.p`
  font-size: 12px;
  color: #888;
  margin: 30px 0 10px;
  text-transform: uppercase;
`;

export const EventItem = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BottomSection = styled.div``;

export const UserBox = styled.div`
  border-top: 3px solid #ffffff44;
  padding-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: #fff;
  }

  small {
    font-size: 12px;
    color: #aaa;
  }
`;
