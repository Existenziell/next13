import Link from 'next/link'

const SmartLink = ({ href, children, classes, external }) => {
  if (external) {
    return (
      <a href={href}
        target='_blank'
        rel='noopener noreferrer nofollow'
        className={classes}
        aria-label='External Link'
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href}>
      <a className={classes} aria-label='Internal Link'>
        {children}
      </a>
    </Link>
  )
}

export default SmartLink
