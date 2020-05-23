import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Lightbox } from '../src';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';

const theme = createMuiTheme();

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        ]}
        open={open}
      />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
