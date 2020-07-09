import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const newTheme = createMuiTheme({
  background: {
    main: grey[500],
  },
  status: {
    danger: '#9e9e9e',
  },
});

export default newTheme;
