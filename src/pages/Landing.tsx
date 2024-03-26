import styled from '@emotion/styled'
import gsap from 'gsap'
import { useState } from 'react'
import { IoMdCheckmarkCircleOutline, IoMdLogIn } from 'react-icons/io'
import Button from '../components/Button'
import Login from '../components/Login'
import Register from '../components/Register'
import { colors } from '../styles/styles.constants'

const Container = styled.div({
  position: 'relative',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  color: colors.text.medium,
  backgroundColor: colors.background,
})

const Content = styled.div({
  maxWidth: 1128,
  margin: '30px auto',
  padding: '10px 40px',
  display: 'flex',
  height: 870,
  overflow: 'auto',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: 10,
    margin: '40px auto',
    maxHeight: 'calc(100vh - 50px)',
  },
})

const TextContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '50%',
  padding: '20px 0',
  marginRight: 10,
  button: {
    marginTop: 20,
    width: 140,
    textAlign: 'center',
  },
  '@media (max-width: 768px)': {
    width: '100%',
    padding: 10,
    margin: '0 0 40px 0',
  },
})

const TextHeading = styled.h1({
  fontSize: 38,
  margin: '0 0 40px',
  span: {
    fontSize: 42,
    color: colors.primary[500],
    span: {
      color: colors.secondary[500],
    },
  },
  '@media (max-width: 768px)': {
    fontSize: 32,
    textAlign: 'center',
    margin: '0 0 20px',
    span: {
      fontSize: 36,
    },
  },
})

const TextBlock = styled.p({
  fontSize: 16,
  margin: '0 0 20px',
  color: colors.text.light,
  span: {
    color: colors.primary[400],
  },
  '@media (max-width: 768px)': {
    fontSize: 20,
    margin: '0 0 20px',
  },
})

const TextList = styled.ul({
  fontSize: 14,
  margin: '0 0 20px',
  li: {
    color: colors.primary[500],
    marginLeft: 20,
    marginBottom: 5,
  },
  '@media (max-width: 768px)': {
    ul: {
      fontSize: 18,
      margin: '0 0 20px',
      li: {
        marginLeft: 20,
        marginBottom: 5,
      },
    },
  },
})

const StartedButton = styled(Button)({
  backgroundColor: colors.greys.dark,
  padding: 12,
  borderRadius: 12,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: colors.primary[600],
    fontWeight: 600,
  },
})

const FormContent = styled.div({
  backgroundColor: colors.paper,
  color: colors.text.light,
  padding: 8,
  marginLeft: 10,
  marginTop: 50,
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  '@media (max-width: 768px)': {
    width: '100%',
    margin: 0,
  },
})

const FormHeading = styled.div({
  display: 'flex',
})

type SwitchButtonProps = {
  login: boolean
  set: boolean
}

const FormSwitchButton = styled.button<SwitchButtonProps>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  flexGrow: 1,
  fontSize: 18,
  padding: 10,
  margin: 5,
  backgroundColor: props.login === props.set ? colors.secondary[300] : colors.paper,
  borderRadius: 10,
  textAlign: 'center',
  border: '1px solid ',
  borderColor: props.login === props.set ? colors.secondary[300] : colors.greys.light,
  color: colors.text.medium,
  transition: 'all 0.3s ease-in-out',
  svg: {
    marginRight: 10,
  },
  '&:hover': {
    color: colors.white,
    backgroundColor: props.login === props.set ? colors.secondary[400] : colors.greys.light,
  },
}))

const Landing = () => {
  const [login, setLogin] = useState<boolean>(false)

  const handleLoginSwitch = () => {
    if (login) {
      gsap.to('.login-container', {
        autoAlpha: 0,
        rotateY: 90,
        duration: 0.3,
        onComplete: () => setLogin(false),
      })
    }
  }

  const handleRegisterSwitch = () => {
    if (!login) {
      gsap.to('.register-container', {
        autoAlpha: 0,
        rotateY: 90,
        duration: 0.3,
        onComplete: () => setLogin(true),
      })
    }
  }

  return (
    <Container className='content'>
      <Content>
        <TextContent>
          <TextHeading>
            Welcome to the{' '}
            <span>
              <span>Biz</span>Spark
            </span>
          </TextHeading>
          <TextBlock>
            Labore ullamco laboris nostrud sint labore aliqua labore non sint eu. In eu anim id sunt
            sunt reprehenderit ut incididunt ut qui incididunt aliquip dolore.
          </TextBlock>

          <TextList>
            <li>Lorem nulla veniam proident est consectetur.</li>
            <li>Occaecat laboris elit.</li>
            <li>Ullamco incididunt nostrud ea cillum cillum est.</li>
            <li>Incididunt commodo quis pariatur cupidatat occaecat.</li>
            <li>Ullamco do elit dolore labore deserunt adipisicing velit.</li>
          </TextList>

          <TextBlock>
            Et non nisi exercitation cupidatat excepteur do mollit aliqua anim. Ad non esse proident
            dolor nostrud ut eiusmod. Labore consequat id Lorem ea id cillum sunt irure. Pariatur ea
            minim excepteur anim Lorem in minim commodo aliqua sunt adipisicing. Nulla esse et
            tempor incididunt proident dolor nulla.
          </TextBlock>
          <StartedButton
            variant='filled'
            onClick={handleLoginSwitch}
            label='Get Started'
          />
        </TextContent>
        <FormContent>
          <FormHeading>
            <FormSwitchButton
              login={login}
              set={true}
              onClick={handleRegisterSwitch}>
              <IoMdLogIn /> Login
            </FormSwitchButton>
            <FormSwitchButton
              login={login}
              set={false}
              onClick={handleLoginSwitch}>
              <IoMdCheckmarkCircleOutline /> Register
            </FormSwitchButton>
          </FormHeading>
          {login ? <Login click={handleLoginSwitch} /> : <Register click={handleRegisterSwitch} />}
        </FormContent>
      </Content>
    </Container>
  )
}

export default Landing
