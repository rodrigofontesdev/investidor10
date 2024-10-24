type OpenButtonProps = {
  onOpen: () => void
}

export function OpenButton({ onOpen }: OpenButtonProps) {
  return (
    <button
      className="group grid grid-rows-3 md:hidden appearance-none w-8 gap-y-1 py-10"
      onClick={onOpen}
      aria-label="Abrir menu principal"
    >
      <span className="block bg-emerald-500 h-1 group-hover:bg-emerald-600 rounded transition-colors"></span>
      <span className="block bg-emerald-500 h-1 group-hover:bg-emerald-600 rounded transition-colors"></span>
      <span className="block bg-emerald-500 h-1 group-hover:bg-emerald-600 rounded transition-colors"></span>
    </button>
  )
}
