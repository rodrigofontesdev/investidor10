type SkeletonProps = {
  width?: string
  height?: string
  rounded?: string
}

export function Skeleton({ width, height, rounded }: SkeletonProps) {
  return <div className={`${width} ${height} ${rounded} bg-slate-200 animate-pulse`}></div>
}
