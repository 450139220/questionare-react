interface Props<T> {
    options: T[];
    value: T;
    onChange: (item: T) => void;
}

export default function ColumnSelection<T extends string>(props: Props<T>) {
    return (
        <div className="flex flex-row">
            <ul
                onClick={(e: React.MouseEvent<HTMLUListElement>) => {
                    const target = e.target as HTMLElement;
                    const type = target.dataset.type as T;
                    props.onChange(type);
                }}>
                {props.options.map((o) => (
                    <li
                        className={
                            o === props.value ? "text-red-500" : "text-black"
                        }
                        key={o}
                        data-type={o}>
                        {o}
                    </li>
                ))}
            </ul>
        </div>
    );
}
