import styles from "./Example.module.css";

interface Props {
    text: string;
    value: string;
    icon: string;
    onClick: (value: string) => void;
}

export const Example = ({ text, value, icon, onClick }: Props) => {
    return (
        <div className={styles.example} onClick={() => onClick(value)}>
            <img src={icon} alt={text} className={styles.exampleIcon}/>
            <p className={styles.exampleText}>{text}</p>
        </div>
    );
};
