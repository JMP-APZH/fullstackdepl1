import { render } from '@redwoodjs/testing/web'

import AdminsPage from './AdminsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminsPage />)
    }).not.toThrow()
  })
})
