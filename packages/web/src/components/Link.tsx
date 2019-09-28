import * as React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink, {
  LinkProps as NextLinkProps
} from 'next/link'
import MuiLink, {
  LinkProps as MuiLinkProps
} from '@material-ui/core/Link'

type NextComposedProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
> &
  NextLinkProps

// eslint-disable-next-line react/display-name
const NextComposed = React.forwardRef<
  HTMLAnchorElement,
  NextComposedProps
>((props, ref) => {
  const {
    as,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    ...other
  } = props

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} {...other} />
    </NextLink>
  )
})

interface LinkPropsBase {
  activeClassName?: string
  innerRef?: React.Ref<HTMLAnchorElement>
  naked?: boolean
}

type LinkProps = LinkPropsBase &
  NextComposedProps &
  Omit<MuiLinkProps, 'ref'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: LinkProps): JSX.Element {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props
  const router = useRouter()

  const className = clsx(classNameProps, {
    [activeClassName]:
      router.pathname === props.href && activeClassName
  })

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        {...other}
      />
    )
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      {...other}
    />
  )
}

// eslint-disable-next-line react/display-name
export default React.forwardRef<
  HTMLAnchorElement,
  LinkProps
>((props, ref) => <Link {...props} innerRef={ref} />)
