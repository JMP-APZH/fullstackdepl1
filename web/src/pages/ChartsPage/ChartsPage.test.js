import { render } from '@redwoodjs/testing/web'

import ChartsPage from './ChartsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChartsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChartsPage />)
    }).not.toThrow()
  })
})
