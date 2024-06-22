import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const { width, height }: any = props
  const scale = Math.min(width / 52, height / 52)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      {...props}
    >
      <g transform={`scale(${scale})`}>
        <path
          fillRule='evenodd'
          d='M39 0H26v13H0v39h26V39h26V0H39ZM13 39h13V26h13V13H26v13H13v13Z'
          clipRule='evenodd'
        />
      </g>
    </svg>
  )
}

export default SvgComponent
