/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/chess-console-puzzles
 * License: MIT, see file 'LICENSE'
 */

import {StockfishPlayer} from "../../../lib/chess-console-stockfish/StockfishPlayer.js"

export class PuzzlePlayer extends StockfishPlayer {
    constructor(chessConsole, name) {
        super(chessConsole, name, {
            worker: chessConsole.props.worker,
            book: undefined,
            level: 2,
            debug: true
        })
    }
}