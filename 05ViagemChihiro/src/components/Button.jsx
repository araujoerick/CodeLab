import React from 'react'

const Button = ({ variant = 'primary', children, icon, ...props }) => {
  const baseStyles =
    'flex flex-1 w-full items-center justify-center gap-2 roboto-bold uppercase px-8 py-3 rounded-[4px] hover:bg-red-400'

  const variantStyles = {
    primary:
      'bg-red-300 text-zinc-950 hover:bg- outline outline-2 -outline-offset-2 outline-red-300',
    outline: 'outline outline-2 -outline-offset-2 outline-red-300',
  }

  const classes = `${baseStyles} ${variantStyles[variant]}`

  return (
    <button className={classes} {...props}>
      {icon && <img className="h-6 w-6" src={icon} alt="" />}
      {children}
    </button>
  )
}

export default Button
