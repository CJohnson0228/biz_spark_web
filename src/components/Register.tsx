import styled from '@emotion/styled'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { colors } from '../styles/styles.constants'
import Checkbox from './Checkbox'
import TextInput from './TextInput'

const Container = styled.div({
  width: '100%',
  opacity: 0,
  visibility: 'hidden',
})

const Heading = styled.h2({
  padding: 20,
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 600,
  borderBottom: '1px solid',
  borderColor: colors.alphas.white[100],
  '@media (max-width: 768px)': {
    textAlign: 'center',
  },
})
const Form = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 20px 20px',
  width: '100%',
  div: {
    display: 'flex',
  },
  button: {
    padding: 20,
    borderRadius: 5,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: 0.1,
    backgroundColor: colors.primary[500],
  },
})

const RegisterButton = styled.button({
  padding: 20,
  borderRadius: 5,
  color: colors.white,
  textAlign: 'center',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 0.1,
  backgroundColor: colors.primary[500],
})

const TermsContainer = styled.div({
  margin: '30px 5px 40px 5px',
  fontSize: 12,
  display: 'flex',
  alignItems: 'center',
  color: colors.alphas.white[500],
  span: {
    color: colors.primary[500],
  },
})

const LoginSwitch = styled.p({
  fontSize: 14,
  marginTop: 20,
  span: {
    cursor: 'pointer',
  },
})

const ErrorWindow = styled.div({
  backgroundColor: colors.warning[500],
  color: colors.white,
  fontSize: 16,
  textAlign: 'center',
  padding: 5,
  opacity: 0,
  minHeight: 26,
  borderRadius: 12,
  marginTop: 5,
})

interface RegisterProps {
  click: () => void
}

const Register = (props: RegisterProps) => {
  const { click } = props
  const [terms, setTerms] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // simulation
  const error = null
  // simulation

  useEffect(() => {
    gsap.fromTo(
      '.register-container',
      {
        autoAlpha: 0,
        rotateY: 90,
      },
      {
        autoAlpha: 1,
        rotateY: 0,
        duration: 0.3,
      }
    )
  }, [])

  useEffect(() => {
    if (error !== null) {
      gsap.to('.error', {
        opacity: 1,
        duration: 0.2,
      })
    }
    if (error === null) {
      gsap.to('.error', {
        opacity: 0,
        duration: 0.2,
      })
    }
  }, [error])

  return (
    <Container className='register-container'>
      <Heading>Register to use BizSpark</Heading>
      <ErrorWindow className='error'>{error}</ErrorWindow>
      <Form>
        <div>
          <TextInput
            type='text'
            placeholder='First Name'
            onChange={setFirstName}
          />
          <TextInput
            type='text'
            placeholder='Last Name'
            onChange={setLastName}
          />
        </div>
        <TextInput
          type='email'
          placeholder='Your Email'
          onChange={setEmail}
        />
        <TextInput
          type='password'
          placeholder='Your Password'
          onChange={setPassword}
        />
        <TermsContainer>
          <Checkbox
            onChange={() => setTerms(!terms)}
            checked={terms}
            label={
              <p>
                I accept the{' '}
                <span style={{ color: colors.primary[500] }}>Terms and Conditions</span> of the
                website
              </p>
            }
          />{' '}
        </TermsContainer>
        <RegisterButton>Complete Registration</RegisterButton>
        <br />
        <LoginSwitch>
          Already have an account?{' '}
          <span
            style={{ color: colors.secondary[500] }}
            onClick={click}>
            Login Now!
          </span>
        </LoginSwitch>
      </Form>
    </Container>
  )
}

export default Register
