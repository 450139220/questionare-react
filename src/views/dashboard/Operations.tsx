import { useNavigate } from "react-router";

export default function Operations() {
  const navigate = useNavigate();
  return (
    <div className="mx-4 mt-4 flex gap-2">
      <button
        onClick={() => {
          navigate("/create");
        }}>
        Create
      </button>
      <button
        onClick={() => {
          navigate("/market");
        }}>
        Market
      </button>
    </div>
  );
}
