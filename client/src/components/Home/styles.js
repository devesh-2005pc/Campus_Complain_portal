import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  gridItem: {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    },
  },
}));
