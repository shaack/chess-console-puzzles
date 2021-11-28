/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-puzzle-console
 * License: MIT, see file 'LICENSE'
 */
import {Chess} from "../../lib/cm-chess/Chess.js"

export class PuzzleConsoleState {
    constructor() {
        this.chess = new Chess()
    }
}