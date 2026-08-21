import svgSprite from '@/shared/accets/svg-sprite.svg'

type IconsProps = {
  iconId: string
  width?: string
  height?: string
  viewbox?: string
  fill?: string
}

export const Icon = (props: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: props.fill === 'primary' ? 'var(--color-primary)' : props.fill }}
      width={props.width || '32'}
      height={props.height || '32'}
      viewBox={props.viewbox || '0 -960 960 960'}>
      <use xlinkHref={`${svgSprite}#${props.iconId}`} />
    </svg>
  )
}
