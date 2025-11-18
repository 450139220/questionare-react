import Button from "@/components/basic/Button";
import { useNavigate } from "react-router";

export default function Operations() {
    const navigate = useNavigate();
    return (
        <div className="mx-4 mt-4 flex gap-2">
            <Button
                onClick={() => {
                    navigate("/create");
                }}
            >
                Create
            </Button>
            <Button
                onClick={() => {
                    navigate("/market");
                }}
            >
                Market
            </Button>
        </div>
    );
}
