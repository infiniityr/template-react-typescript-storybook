import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

import MyButton from './MyButton'

/**
 * @vitest-environment jsdom
 */

describe('Test the component MyButton', () => {
  it('renders component', () => {
    render(<MyButton text="My Text" />)

    expect(screen.findByText('My Text')).toBeTruthy()
  })
})
