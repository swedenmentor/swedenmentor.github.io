import styles from "./Example.module.css";

interface Props {
    text: string;
    value: string;
    icon: string;
    color: string;
    title: string;
    onClick: (value: string) => void;
}

export const Example = ({ text, value, icon, color, title, onClick }: Props) => {
    return (
        <div className={styles.example} onClick={() => onClick(value)}>
	    <h1 className={styles.exampleTextTitle} style={{color: color}}><img src={icon} alt={text} className={styles.exampleIcon}/>{title}</h1>
            <p className={styles.exampleText}>{text}</p>
        </div>
    );
};
