import styled from '@emotion/styled'
import { FaFacebookF } from 'react-icons/fa'

const Button = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 5,
  textAlign: 'center',
  backgroundColor: '#4267b2',
  color: '#ffffff',
  svg: {
    marginRight: 10,
  },
})

const FacebookButton = () => {
  return (
    <Button>
      <FaFacebookF />
      Login with Facebook
    </Button>
  )
}

export default FacebookButton
