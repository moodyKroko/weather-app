import { render, screen } from '@test-utils'
import Navbar from './Navbar'

test('renders content', () => {
  render(<Navbar />)

  const element = screen.getByText('Weather App')
  expect(element).toBeDefined()
})

describe('Navbar component', () => {
  it('has a title', () => {
    render(<Navbar />)
    expect(screen.getByText('Weather App'))
  })
})
