import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

HTMLFormElement.prototype.requestSubmit = function() {
  if (this.dispatchEvent) {
    const event = new Event('submit', { bubbles: true, cancelable:true})
    this.dispatchEvent(event)
  }
}

afterEach(() => {
  cleanup()
})