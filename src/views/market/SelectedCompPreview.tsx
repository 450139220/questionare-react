import type { AllCompId } from "./CompList";

interface Props {
    selectedComp: AllCompId | null;
}

export default function SelectedCompPreview(props: Props) {
    console.log(props.selectedComp);

    return <>{props.selectedComp ? <div>1</div> : <div>2</div>}</>;
}
// {comps[props.selectedType].map((c) => (
//     <div key={c.id}>
//         <c.comp />
//     </div>
// ))}
