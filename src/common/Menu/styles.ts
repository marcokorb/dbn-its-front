import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));
