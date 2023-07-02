import { Board } from '@/entities/Board'
import {
  blackCell,
  blueCell,
  greenCell,
  orangeCell,
  pinkCell,
  purpleCell,
  redCell,
  whiteCell,
  yellowCell
} from './fixtures/Cell'

describe('@/entities/Board', () => {
  describe('swap', () => {
    it('should swap cells properly', () => {
      const board = new Board([
        [blackCell, redCell],
        [blueCell, whiteCell]
      ])

      board.swap(0, 0, 1, 1)

      expect(board.cells).toStrictEqual([
        [whiteCell/* <- */, redCell],
        [blueCell, /* -> */blackCell]
      ])

      board.swap(0, 1, 1, 1)

      expect(board.cells).toStrictEqual([
        [whiteCell, redCell],
        [blackCell/* <- */, /* -> */blueCell]
      ])

      board.swap(0, 1, 1, 0)

      expect(board.cells).toStrictEqual([
        [whiteCell, /* -> */blackCell],
        [redCell/* <- */, blueCell]
      ])
    })

    it('should "swap" one cell to itself', () => {
      const board = new Board([[blackCell, blueCell]])

      board.swap(0, 0, 0, 0)

      expect(board.cells).toStrictEqual([[blackCell, blueCell]])
    })

    describe('movements', () => {
      it('should start on 0', () => {
        const board = new Board([[purpleCell]])

        expect(board.movements).toBe(0)
      })

      it('should count movements properly', () => {
        const board = new Board([
          [pinkCell, redCell],
          [yellowCell, orangeCell]
        ])

        board.swap(0, 1, 0, 0)

        expect(board.movements).toBe(1)

        board.swap(0, 1, 0, 0)

        expect(board.movements).toBe(2)

        board.swap(0, 1, 0, 0)

        expect(board.movements).toBe(3)
      })

      it('should not count when swap a cell to itself', () => {
        const board = new Board([[greenCell, yellowCell]])

        board.swap(1, 0, 1, 0)

        expect(board.movements).toBe(0)
      })
    })
  })
})
