import styled from '@emotion/styled'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { colors } from '../styles/styles.constants'
import Checkbox from './Checkbox'
import FacebookButton from './FacebookButton'
import GoogleButton from './GoogleButton'
import TextInput from './TextInput'
import TwitterButton from './TwitterButton'

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
  borderColor: colors.alphas.black[100],
  '@media (max-width: 768px)': {
    textAlign: 'center',
  },
})

const Form = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  width: '100%',
  div: {
    display: 'flex',
  },
  p: {
    color: colors.alphas.black[700],
  },
})

const LoginButton = styled.button({
  padding: 20,
  borderRadius: 5,
  color: colors.white,
  textAlign: 'center',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 0.1,
  backgroundColor: colors.primary[500],
})

const Remember = styled.div({
  margin: '30px 10px 30px 0',
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Divider = styled.div({
  position: 'relative',
  height: 3,
  borderBottom: '1px solid',
  borderColor: colors.alphas.black[100],
  margin: '30px 0 20px',
  p: {
    position: 'absolute',
    top: -3,
    fontSize: 12,
    color: colors.alphas.black[600],
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '0 20px',
    backgroundColor: colors.paper,
  },
})

const RegisterSwitch = styled.p({
  fontSize: 14,
  lineHeight: 1.4,
  marginTop: 20,
  span: {
    cursor: 'pointer',
  },
})

const ForgotButton = styled.div({
  color: colors.greys.medium,
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

interface LoginProps {
  click: () => void
}

const Login = (props: LoginProps) => {
  const { click } = props
  const [remember, setRemember] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // simulation
  const error = null
  // simulation

  useEffect(() => {
    gsap.fromTo(
      '.login-container',
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
    <Container className='login-container'>
      <Heading>Log in to Your Account</Heading>
      <ErrorWindow className='error'>Error</ErrorWindow>
      <Form>
        <TextInput
          type='text'
          placeholder='Your Email'
          onChange={setEmail}
        />
        <TextInput
          type='password'
          placeholder='Your Password'
          onChange={setPassword}
        />
        <Remember>
          <div>
            <Checkbox
              onChange={() => setRemember(!remember)}
              label='Remember Me'
            />
          </div>
          <ForgotButton>
            <a>Forgot my Password</a>
          </ForgotButton>
        </Remember>
        <LoginButton>Login</LoginButton>
        <Divider>
          <p>OR</p>
        </Divider>
        <FacebookButton />
        <br />
        <TwitterButton />
        <br />
        <GoogleButton />
        <RegisterSwitch>
          Don't you have an account?{' '}
          <span
            style={{ color: colors.secondary[500] }}
            onClick={click}>
            Register Now!
          </span>{' '}
          it's really simple and you can start enjoying all the benafits!
        </RegisterSwitch>
      </Form>
    </Container>
  )
}

export default Login
