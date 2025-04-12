import { CalendarFold, LayoutDashboard, Settings, House   } from 'lucide-react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  SidebarContainer,
  TopSection,
  LogoBox,
  NavList,
  NavItem,
  SectionTitle,
  EventItem,
  BottomSection,
  UserBox,
  Avatar,
  UserInfo,
  Divider,
} from './Sidebar.styler'


const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopSection>
        <LogoBox>
          <span>FlowMate</span>
          <KeyboardArrowDownIcon />
        </LogoBox>

        <Divider/>

        <NavList>
          <NavItem>
            <House size={20} />
            Home
          </NavItem>
          <NavItem>
            <CalendarFold size={20} />
            Calendar
          </NavItem>
          <NavItem>
            <LayoutDashboard size={20} />
            Dashboard
          </NavItem>
          <NavItem>
            <Settings size={20} />
            Settings
          </NavItem>
        </NavList>

        <SectionTitle>Importante</SectionTitle>
        <EventItem>Bear Hug: Live in Concert</EventItem>
        <EventItem>Six Fingers — DJ Set</EventItem>
        <EventItem>We All Look The Same</EventItem>
        <EventItem>Viking People</EventItem>
      </TopSection>

      <BottomSection>
        <NavItem>
          <HelpOutlineIcon />
          Support
        </NavItem>
        <NavItem>
          <AutoAwesomeIcon />
          IA Changelog
        </NavItem>

        <UserBox>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User avatar" />
          <UserInfo>
            <span>Erica</span>
            <small>erica@example.com</small>
          </UserInfo>
          <KeyboardArrowDownIcon />
        </UserBox>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
