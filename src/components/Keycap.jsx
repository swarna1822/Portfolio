export function Keycap({
  legend,
  sub,
  wide,
  space,
  accent,
  pressed,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  current = false,
}) {
  const classes = [
    'keycap',
    wide ? 'keycap--wide' : '',
    space ? 'keycap--space' : '',
    accent ? `keycap--${accent}` : '',
    pressed ? 'is-pressed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className="keycap__face">
        <span className="keycap__legend">{legend}</span>
        {sub ? <span className="keycap__sub">{sub}</span> : null}
        {children}
      </span>
    </>
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        aria-current={current ? 'true' : undefined}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} aria-current={current ? 'true' : undefined}>
      {inner}
    </button>
  )
}
