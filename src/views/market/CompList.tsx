import type { CompType } from ".";
import { selectComponents } from "./components/select";
import { textComponents } from "./components/text";

export type AllCompId =
    | ComponentId<typeof selectComponents>
    | ComponentId<typeof textComponents>;
interface Props {
    selectedType: CompType;
    onClick: (compId: AllCompId) => void;
}

export default function CompList(props: Props) {
    const comps: Record<CompType, SpecificComp[]> = {
        select: selectComponents,
        text: textComponents,
    };

    const handleSelectComp = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        props.onClick(target.dataset.id as AllCompId);
    };

    return (
        <div onClick={handleSelectComp}>
            {comps[props.selectedType].map((c) => (
                <button key={c.id} data-id={c.id}>
                    {c.name}
                </button>
            ))}
        </div>
    );
}
