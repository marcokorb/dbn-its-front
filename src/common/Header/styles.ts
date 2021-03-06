import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: "32px",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));
