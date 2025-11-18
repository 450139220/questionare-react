type ButtonType = "primary" | "success" | "danger" | "error";

interface Props {
    type?: ButtonType;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent) => void;
}

export default function Button({ type = "primary", children, onClick }: Props) {
    let colorMap = {
        primary: "bg-blue-500",
        success: "bg-green-500",
        danger: "bg-yellow-500",
        error: "bg-red-500",
    };
    return (
        <a
            className={`${colorMap[type]} inline-block w-20 cursor-pointer px-2 py-1 text-center text-white`}
            onClick={onClick}
        >
            {children}
        </a>
    );
}
