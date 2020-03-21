import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { history } from "../enhancers/middlewares/router";
import ui from "./ui";
// import status from "./status";
// import data from "./data";

export default combineReducers({
    router: connectRouter(history),
    ui
    // status,
    // data
});
