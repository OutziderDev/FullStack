import userEvent from "@testing-library/user-event"
import {render,screen} from "@testing-library/react"
import Login from "../Components/Login"

HTMLFormElement.prototype.requestSubmit = function () {
  if (this.dispatchEvent) {
    const event = new Event('submit', { bubbles: true, cancelable: true });
    this.dispatchEvent(event);
  }
}

test('test login call submit ', async () => { 
  const handleLogin = vi.fn()
  const handleUser = vi.fn()
  const handlePass = vi.fn()
  const user = userEvent.setup()

  render(<Login handleLogin={handleLogin} setUsername={handleUser} setPassword={handlePass}/>)

  const inputuser = screen.getByTestId('inputUser')
  const inputpass = screen.getByTestId('inputPass')
  const sendButton = screen.getByText('Login')
  //screen.debug(sendButton)

  await user.type(inputuser, "admin")
  await user.type(inputpass, "123")
  await user.click(sendButton)

  expect(handleLogin.mock.calls).toHaveLength(1)
  //console.log('handlemock:',handleLogin.mock.calls)
  expect(handleLogin).toHaveBeenCalledTimes(1)
  
  //expect(handleLogin).toHaveBeenCalledWith({ username: 'admin', password: '123' })
})