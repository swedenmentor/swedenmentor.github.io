import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
    icon: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How much does it cost to study a Master's program in Sweden?",
        value: "How much does it cost to study a Master's program in Sweden?",
        icon: "./search.svg"
    },
    {   text: "How are income taxes calculated in Sweden?",
        value: "How are income taxes calculated in Sweden?",
        icon: "./search.svg"
    },
    {   text: "What are the conditions for permanent residence permit in Sweden?",
        value: "What are the conditions for permanent residence permit in Sweden?",
        icon: "./search.svg"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} icon={x.icon} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
