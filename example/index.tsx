import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Lightbox } from '../src';
import {
  Button,
  Collapse,
  createMuiTheme,
  CssBaseline,
  Grow,
  Slide,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

const theme = createMuiTheme();

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h3">Lightbox Demo</Typography>
      <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
        Open default
      </Button>
      <Lightbox
        onClose={() => setOpen(false)}
        images={[
          {
            src:
              'https://images.unsplash.com/photo-1590157678696-a5151f512cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
          },
          {
            src:
              'https://images.unsplash.com/photo-1587613990174-1f14ba3be7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          },
          {
            src:
              'https://images.unsplash.com/photo-1590114025443-530951ab7702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
          },
        ]}
        open={open}
      />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
