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
    const [contributors, setContributors] = useState<Contributor[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/repos/tuananhdao/chat.duhocsinh.api/contributors')
        .then(response => response.json())
        .then((data: any[]) => {
            const contribList = data.map((contributor: any) => ({
                login: contributor.login,
                avatar_url: contributor.avatar_url,
                html_url: contributor.html_url,
            }));
            setContributors(contribList);
        });
    }, []);

    return (
        <div className={styles.layout}>

            {/*<footer className={styles.footer} role={"banner"}>
                <ul className={styles.footerNavList} style={{display: "flex", flexWrap: "wrap"}}>
                    <li className={styles.footerLabel} style={{marginLeft: "30px", marginRight: "20px"}}>Developers:</li>
                    {contributors.map((contributor, index) => (
                        <li key={index} style={{marginRight: "10px", marginBottom: "0px"}}>
                            <a href={contributor.html_url} target="_blank" rel="noopener noreferrer" style={{display: "flex", alignItems: "center"}}>
                                <img
                                    src={contributor.avatar_url}
                                    alt={contributor.login}
                                    width="20"
                                    height="20"
                                    style={{marginRight: "5px", borderRadius: "50%"}}

                                />
                                {contributor.login}
                            </a>

                        </li>
                    ))}
                </ul>
            </footer>*/}

            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Sweden chat</h3>
                    </Link>
                    <nav>

                        <ul className={styles.headerNavList}>
                            <li>
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