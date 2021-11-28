/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/chess-console-puzzles
 * License: MIT, see file 'LICENSE'
 */
import {Chess} from "../../lib/cm-chess/Chess.js"

export class Puzzle {
    constructor(pgn) {
        this.chess = new Chess()
        this.chess.loadPgn(pgn)
    }
}