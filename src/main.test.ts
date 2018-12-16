import { add } from './main'

describe('add', () => {
  it('should add numbers', () => {
    expect(add(1,1)).toBe(2)
  })
})