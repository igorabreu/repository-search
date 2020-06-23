import format from '../format'

const mockString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

describe('Utils', () => {
  describe('format.number function', () => {
    test('Should return formated number', async () => {
      const result = format.number(3000)

      expect(result).toEqual('3,000');
    })
  })

  describe('format.text function', () => {
    test('Should return formated text', async () => {
      const result = format.text(mockString, 15)

      expect(result).toEqual('Lorem ipsum dol ...');
    })
  })
})