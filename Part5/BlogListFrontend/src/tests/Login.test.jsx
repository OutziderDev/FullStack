import userEvent from "@testing-library/user-event"
import {render,screen} from "@testing-library/react"
import Login from "../Components/Login"

test('test login call submit ', async () => { 
  const handleLogin = vi.fn()
  const handleUser = vi.fn()
  const handlePass = vi.fn()
  const user = userEvent.setup()

  render(<Login handleLogin={handleLogin} setUsername={handleUser} setPassword={handlePass}/>)

  const inputuser = screen.getByTestId('inputUser')
  const inputpass = screen.getByTestId('inputPass')
  //screen.debug(inputuser)
  //screen.debug(inputpass)
  
  const sendButton = screen.getByText('Login')
  //screen.debug(sendButton)

  await user.type(inputuser, "admin")
  await user.type(inputpass, "123")
  await user.click(sendButton)

  expect(handleLogin.mock.calls).toHaveLength(1)
  //expect(handleLogin.mock.calls[0][0].content).toBe("admin")
})