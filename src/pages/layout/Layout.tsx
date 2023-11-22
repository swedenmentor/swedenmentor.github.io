import { Outlet, NavLink, Link } from "react-router-dom";
import github from "../../assets/github.svg";
import styles from "./Layout.module.css";
import { useState, useEffect } from "react";
import { LoginButton } from "../../components/LoginButton";

interface Contributor {
    login: string;
    avatar_url: string;
    html_url: string;
}

const Layout = () => {

    return (
        <div className={styles.layout}>

            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="https://swedenmentor.github.io/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Sweden chat</h3>
                    </Link>
                    <nav>

                        <ul className={styles.headerNavList}>
                            <li>
                                <span className={styles.visitUsText}>Visit us</span>
                                 <a href="https://github.com/swedenmentor/API" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Outlet />


        </div>
    );
};
export default Layout;