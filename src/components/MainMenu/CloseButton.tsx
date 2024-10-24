type CloseButtonProps = {
  onClose: () => void
}

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      className="group grid grid-rows-2 md:hidden appearance-none w-8 h-8 absolute top-4 right-4"
      onClick={onClose}
      aria-label="Fechar menu principal"
    >
      <span className="block h-1 bg-red-500 group-hover:bg-red-600 rounded transform rotate-45 mt-4"></span>
      <span className="block h-1 bg-red-500 group-hover:bg-red-600 rounded transform -rotate-45"></span>
    </button>
  )
}
