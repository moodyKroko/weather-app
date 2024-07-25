import { render, screen } from '@test-utils'
import Navbar from './Navbar'


describe('Navbar component', () => {
  it('has a title', () => {
    render(<Navbar />)
    expect(screen.getByText('Weather App'))
  })
})
