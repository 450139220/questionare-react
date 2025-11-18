import type { CompType } from ".";

interface Props {
    selectedType: CompType;
}

export default function CompList(props: Props) {
    return <div>{props.selectedType}</div>;
}
