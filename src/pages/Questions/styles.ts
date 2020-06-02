import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: '20px auto',
    },
    header: {
      padding: '24px 24px 12px 24px',
      fontSize: '1.3rem'
    }
    ,
    content: {
      padding: '12px 0',
      fontSize: '1rem'
    },
  }),
);
