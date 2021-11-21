/**
 * Author: Stefan Haack (https://shaack.com)
 * Date: 2021-11-20
 */
import {Chess} from "";

export class PuzzlePlayer {
    constructor(props) {
        this.props = {
            mismoveFirstInPgn: false // true for lichess type
        }
        Object.assign(this.props, props)
        this.chess = new Chess()
    }

    /**
     * Show a chess puzzle
     * @param pgn The pgn containing the puzzle
     * @param index The index of the puzzle in the pgn, if it contains more than one
     */
    showPuzzle(pgn, index = 0) {

    }
}