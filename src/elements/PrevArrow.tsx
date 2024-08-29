import { ArrowProps } from 'config'

export const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !w-15 !h-15 !flex !justify-center !items-center rounded-full !bg-black/50 before:!content-[url('assets/prev.svg')] z-10 ml-6`}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}
