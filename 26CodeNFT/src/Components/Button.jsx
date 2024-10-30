import React from 'react'

const Button = ({ variant = 'primary', children, icon: Icon, ...props }) => {
  const baseStyles =
    'flex items-center py-3 px-6 gap-2 poppins-semibold uppercase w-full'

  const variantStyles = {
    primary: 'bg-[#131313] text-white hover:bg-[#F7FC0E] hover:text-[#131313]',
    fluor: 'bg-[#F7FC0E] text-[#131313] hover:bg-[#131313] hover:text-white',
  }

  const classes = `group/edit ${baseStyles} ${variantStyles[variant]}`

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className="h-6 w-6" />}
      {children}
    </button>
  )
}

export default Button
