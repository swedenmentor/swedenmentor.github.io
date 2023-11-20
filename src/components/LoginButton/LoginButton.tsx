import { DefaultButton } from "@fluentui/react";
import { useMsal } from "@azure/msal-react";

import styles from "./LoginButton.module.css";

export const LoginButton = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();
    const handleLoginPopup = () => {
    };
    const handleLogoutPopup = () => {
    };
    const logoutText = `Logout\n${activeAccount?.username}`;
    return (
        <DefaultButton
            text="Login"
            className={styles.loginButton}
            onClick={activeAccount ? handleLogoutPopup : handleLoginPopup}
        ></DefaultButton>
    );
};
