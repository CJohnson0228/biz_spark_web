import styled from '@emotion/styled'
import { ComponentProps } from 'react'
import { colors } from '../styles/styles.constants'

interface ButtonProps extends ComponentProps<'button'> {
  label: string
  variant?: 'text' | 'outline' | 'filled'
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'caution' | 'note' | 'success'
}

const Button = (props: ButtonProps) => {
  const { label, variant = 'text', color = 'primary' } = props

  const ButtonBase = styled.button({
    padding: '5px 15px',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 8,
    color: colors.text.dark,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
  })

  const TextButton = styled(ButtonBase)({
    color: colors[color][500],
  })
  const OutlineButton = styled(ButtonBase)({
    color: colors[color][500],
    border: '1px solid ' + colors[color][500],
  })
  const FillButton = styled(ButtonBase)({
    backgroundColor: colors[color][500],
    color: colors.white,
  })

  if (variant === 'filled') {
    return <FillButton>{label}</FillButton>
  }
  if (variant === 'outline') {
    return <OutlineButton>{label}</OutlineButton>
  }
  if (variant === 'text') {
    return <TextButton>{label}</TextButton>
  }
}

export default Button
