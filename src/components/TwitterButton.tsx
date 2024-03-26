import styled from '@emotion/styled'
import { FaXTwitter } from 'react-icons/fa6'

const Button = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 5,
  textAlign: 'center',
  backgroundColor: '#000000',
  color: '#ffffff',
  border: '1px solid #333',
  svg: {
    marginRight: 10,
  },
})

const TwitterButton = () => {
  return (
    <Button>
      <FaXTwitter />
      Login with X
    </Button>
  )
}

export default TwitterButton
