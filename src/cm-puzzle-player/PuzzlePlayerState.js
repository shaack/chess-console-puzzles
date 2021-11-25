import {Chess} from "../../lib/cm-chess/Chess.js";

/**
 * Author: Stefan Haack (https://shaack.com)
 * Date: 2021-11-24
 */
export class PuzzlePlayerState {
    constructor() {
        this.chess = new Chess()
    }

    loadPuzzle(pgnUrl) {
        fetch(pgnUrl).then(function (response) {
            response.text().then(function (pgn) {
                this.chess.loadPgn(pgn)
            })
        })
    }
}