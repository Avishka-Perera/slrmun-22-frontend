import React, { useState, useEffect, useContext } from "react";

//firebase
import app from "../../firebase/base";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { AuthContext } from "../../firebase/Auth";

// routing
import { useLocation, useNavigate } from "react-router-dom";
import {
  USER_PROFILE,
  COMMITTEE_SELECTION,
  PAYMENTS,
  USER_MANAGEMENT,
} from "../../constants/routes";

// styles
import { makeStyles, useTheme } from "@material-ui/core";
import styles from "./styles";

// components
import ListItem from "./list-item/ListItem";

// other constants
import { USERS_DOC_NAME } from "../../constants/general";

// other functions
import { getUserVisibilityArray } from "../../functions/user";

const useStyles = makeStyles(styles);

const SidePanel = ({ cross, setShowSidePanel }) => {
  // styles
  const theme = useTheme();
  const classes = useStyles(theme);
  let body_class = classes.body;
  if (cross) {
    body_class = [classes.body, classes.body_in].join(" ");
  }

  // routing
  const navigate = useNavigate();
  const current_path = useLocation().pathname;

  // state
  const [userLevel, setUserLevel] = useState(null);

  //firebase
  const auth = getAuth(app);
  const db = getDatabase(app);
  const { currentUser } = useContext(AuthContext);
  const current_uid = currentUser.uid;
  const userRef = ref(db, USERS_DOC_NAME + "/" + current_uid);
  const fetch = () => {
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setUserLevel(data.user_level);
    });
  };

  //state management
  useEffect(() => {
    if (userLevel === null) {
      fetch();
    }
  }, []);

  // authentication
  const handleLogout = () => {
    auth.signOut();
  };
  const visibilityArray = getUserVisibilityArray(userLevel);
  return (
    <div className={classes.root}>
      <div className={body_class}>
        {visibilityArray[0] ? (
          <ListItem
            text={"Profile"}
            link={USER_PROFILE}
            active={current_path === USER_PROFILE}
            onClick={() => setShowSidePanel(false)}
          />
        ) : null}
        {visibilityArray[1] ? (
          <ListItem
            text={"Committee Selection"}
            link={COMMITTEE_SELECTION}
            active={current_path === COMMITTEE_SELECTION}
            onClick={() => setShowSidePanel(false)}
          />
        ) : null}
        {visibilityArray[2] ? (
          <ListItem
            text={"Payments"}
            link={PAYMENTS}
            active={current_path === PAYMENTS}
            onClick={() => setShowSidePanel(false)}
          />
        ) : null}
        {visibilityArray[3] ? (
          <ListItem
            text={"User Management"}
            link={USER_MANAGEMENT}
            active={current_path === USER_MANAGEMENT}
            onClick={() => setShowSidePanel(false)}
          />
        ) : null}
        <ListItem text={"Log out"} onClick={handleLogout} />
      </div>
    </div>
  );
};

export default SidePanel;
