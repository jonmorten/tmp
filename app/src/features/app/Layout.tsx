import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';

import { useIsSmallScreen } from '@/app/theme';
import { StatusBar } from '@/features/app/StatusBar';
import { TopBar } from '@/features/app/TopBar';
import { PropsWithChildren } from '@/types/app';

export const Layout = ({ children }: PropsWithChildren) => {
  const isSmallScreen = useIsSmallScreen();
  const drawerWidth = 240;

  return (
    <>
      <Box
        sx={(theme) => ({
          position: 'relative',
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
        <TopBar />

        <StatusBar />
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant={isSmallScreen ? 'temporary' : 'permanent'}
          open={!isSmallScreen}
          sx={{
            flexShrink: 0,
            width: drawerWidth,
            ['& .MuiDrawer-paper']: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />

          <Toolbar />

          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box>{children}</Box>
      </Box>
    </>
  );
};
