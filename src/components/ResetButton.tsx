interface Props {
  onReset: () => void;
}

export default function ResetButton({ onReset }: Props) {
  return (
    <button
      onClick={onReset}
      className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
    >
      Resetar Progresso
    </button>
  );
}
