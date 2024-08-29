import { ArrowProps } from 'config'

export const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !w-15 !h-15 !flex !justify-center !items-center rounded-full !bg-black/50 before:!content-[url('assets/next.svg')] z-10 mr-6`}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}
