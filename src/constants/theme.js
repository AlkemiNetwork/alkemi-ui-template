import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core//colors/red";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4785a5"
        },
        secondary: {
            main: "#9575cd"
        },
        error: red
    }
});

export default theme;
