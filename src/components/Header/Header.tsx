import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// Componente do Logo
const Logo = styled('img')({
  height: '40px',
});

// Estilos personalizados para os links de navegação
const NavLink = styled(Button)(({ theme }) => ({
  color: '#C9D1D9', // Cor do texto padrão
  fontWeight: 'bold',
  margin: theme.spacing(0, 1),
  textTransform: 'none', // Remove uppercase automático
  '&:hover': {
    color: '#58A6FF', // Azul claro no hover
    backgroundColor: 'transparent',
  },
}));

// Estilo para o link ativo
const ActiveNavLink = styled(NavLink)({
  color: '#FFFFFF', // Branco para item ativo
  '&:hover': {
    color: '#58A6FF',
  },
});

const pages = ['Home', 'Sobre', 'Contato'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [currentPage, setCurrentPage] = React.useState('Home');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page?: string) => {
    if (page) {
      setCurrentPage(page);
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        width: '100%',
        backgroundColor: '#161B22', // Cor do sidebar
        boxShadow: 'none',
        borderBottom: '1px solid #30363D' // Borda sutil
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo e área esquerda */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
           
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#FFFFFF', // Branco para o texto FlowMate
                textDecoration: 'none',
              }}
            >
              FlowMate
            </Typography>
          </Box>

          {/* Menu para mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: '#C9D1D9' }} // Cor do ícone
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#161B22', // Cor de fundo do menu
                  border: '1px solid #30363D'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{
                    color: currentPage === page ? '#FFFFFF' : '#C9D1D9',
                    '&:hover': {
                      backgroundColor: '#1F6FEB20' // Azul com transparência
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#FFFFFF',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            FlowMate
          </Typography>

          {/* Links de navegação para desktop */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            gap: 1
          }}>
            {pages.map((page) => (
              currentPage === page ? (
                <ActiveNavLink
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  href="#"
                >
                  {page}
                </ActiveNavLink>
              ) : (
                <NavLink
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  href="#"
                >
                  {page}
                </NavLink>
              )
            ))}
          </Box>

          {/* Espaço vazio para alinhamento (opcional) */}
          <Box sx={{ width: { xs: '24px', md: '0' } }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;