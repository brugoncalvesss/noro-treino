interface Props {
  onReset: () => void;
}

export default function ResetButton({ onReset }: Props) {
  return (
    <button
      onClick={onReset}
      className="w-full sm:w-auto mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base"
    >
      Resetar Progresso
    </button>
  );
}
