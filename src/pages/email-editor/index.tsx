import { Stack, Box, useTheme } from '@mui/material';

import {
  useInspectorDrawerOpen,
  useSamplesDrawerOpen,
} from './documents/editor/EditorContext';
import InspectorDrawer, { INSPECTOR_DRAWER_WIDTH } from './InspectorDrawer';
import SamplesDrawer, { SAMPLES_DRAWER_WIDTH } from './SamplesDrawer';
import TemplatePanel from './TemplatePanel';

function useDrawerTransition(
  cssProperty: 'margin-left' | 'margin-right',
  open: boolean,
) {
  const { transitions } = useTheme();
  return transitions.create(cssProperty, {
    easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
    duration: !open
      ? transitions.duration.leavingScreen
      : transitions.duration.enteringScreen,
  });
}

export default function Editor() {
  const inspectorDrawerOpen = useInspectorDrawerOpen();
  const samplesDrawerOpen = useSamplesDrawerOpen();

  const marginLeftTransition = useDrawerTransition(
    'margin-left',
    samplesDrawerOpen,
  );
  const marginRightTransition = useDrawerTransition(
    'margin-right',
    inspectorDrawerOpen,
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '64px', // Push down from navbar
        overflow: 'hidden', // Prevent unwanted scroll issues
      }}
    >
      <InspectorDrawer />
      <SamplesDrawer />

      <Stack
        sx={{
          flexGrow: 1,
          marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0,
          marginLeft: samplesDrawerOpen ? `${SAMPLES_DRAWER_WIDTH}px` : 0,
          transition: [marginLeftTransition, marginRightTransition].join(', '),
        }}
      >
        <TemplatePanel />
      </Stack>
    </Box>
  );
}
