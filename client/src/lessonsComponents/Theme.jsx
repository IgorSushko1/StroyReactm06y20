import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const newTheme = createMuiTheme({
  // palette: {
  //   primary: {
  //     light: '#cfcfcf',
  //     main: '#9e9e9e',
  //     dark: '#8d8d8d',
  //     contrastText: '#000000',
  //   },
  // },
  background: {
    main: grey[500],
  },
  status: {
    danger: '#9e9e9e',
  },
});

export default newTheme;
