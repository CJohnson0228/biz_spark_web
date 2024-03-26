import styled from '@emotion/styled'
import gsap from 'gsap'
import { Dispatch, SetStateAction, forwardRef, useRef, useState } from 'react'
import { colors } from '../styles/styles.constants'

const Wrapper = styled.div({
  backgroundColor: colors.white,
  position: 'relative',
  margin: 8,
  border: '1px solid ' + colors.alphas.black[200],
})

const Input = styled.input({
  fontFamily: 'inherit',
  width: '100%',
  border: 0,
  outline: 0,
  padding: '18px 10px 8px',
  '&::placeholder': {
    visibility: 'hidden',
  },
})

const Placeholder = styled.span({
  fontSize: 16,
  position: 'absolute',
  top: 20,
  left: 10,
  display: 'block',
  color: colors.text.medium,
  pointerEvents: 'none',
})

interface TextInputProps {
  placeholder: string
  type: 'text' | 'password' | 'email'
  onChange: Dispatch<SetStateAction<string>>
}

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ placeholder, onChange, type, ...other }, ref) => {
    const [thisValue, setThisValue] = useState<string>('')
    const LabelRef = useRef<HTMLSpanElement>(null)

    const focusAnim = () => {
      gsap.to([LabelRef.current], {
        top: 4,
        fontSize: 12,
        duration: 0.2,
      })
    }

    const blurAnim = () => {
      if (thisValue === '') {
        gsap.to([LabelRef.current], {
          top: 20,
          fontSize: 16,
          duration: 0.2,
        })
      }
    }

    const handleChange = (newValue: string) => {
      setThisValue(newValue)
      onChange(newValue)
    }

    return (
      <Wrapper ref={ref}>
        <Input
          type={type}
          placeholder={placeholder}
          autoComplete='new-password'
          value={thisValue}
          onFocus={focusAnim}
          onBlur={blurAnim}
          onChange={(e) => handleChange(e.target.value)}
          {...other}
        />
        <Placeholder ref={LabelRef}>{placeholder}</Placeholder>
      </Wrapper>
    )
  }
)

export default TextInput
