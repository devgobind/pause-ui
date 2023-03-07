import * as React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../src'

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button />)
  })
})
