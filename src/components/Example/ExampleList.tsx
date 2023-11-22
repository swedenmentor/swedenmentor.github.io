import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
    icon: string;
    color: string;
    title: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How much does it cost to study a Master's program in Sweden?",
        value: "How much does it cost to study a Master's program in Sweden?",
        icon: "./icons/chat.png",
	color: "#174ae4",
	title: "Student life"
    },
    {   text: "Is it difficult to get a job in Sweden after finishing a Master's degree?",
        value: "Is it difficult to get a job in Sweden after finishing a Master's degree?",
        icon: "./icons/tax.png",
	color: "#b0570c",
	title: "Career"
    },
    {   text: "What are the conditions for permanent residence permit in Sweden?",
        value: "What are the conditions for permanent residence permit in Sweden?",
        icon: "./icons/organization.png",
	color: "#09743d",
	title: "Residence"
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
                    <Example text={x.text} value={x.value} icon={x.icon} color={x.color} title={x.title} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
