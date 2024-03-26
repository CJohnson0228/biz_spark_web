import styled from '@emotion/styled'
import { FaGoogle } from 'react-icons/fa'

const Button = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 5,
  textAlign: 'center',
  backgroundColor: '#db4437',
  color: '#ffffff',
  svg: {
    marginRight: 10,
  },
})

const GoogleButton = () => {
  return (
    <Button>
      <FaGoogle />
      Login with Google
    </Button>
  )
}

export default GoogleButton
