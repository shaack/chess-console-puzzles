/**
 * Author: Stefan Haack (https://shaack.com)
 * Date: 2021-11-20
 */

import {Chess} from "../../lib/cm-chess/Chess.js";
import {Component} from "../../lib/cm-web-modules/app/Component.js";
import {PuzzlePlayerState} from "./PuzzlePlayerState.js";

export class PuzzlePlayer extends Component {

    constructor(context, props) {
        props = Object.assign({
            mismoveFirstInPgn: false // true for lichess type
        }, props)
        super(context, props, new PuzzlePlayerState())
    }

    /**
     * Show a chess puzzle
     * @param pgn The pgn containing the puzzle
     * @param index The index of the puzzle in the pgn, if it contains more than one
     */
    loadPuzzle(pgn, index = 0) {
        this.state.loadPuzzle(pgn, index)
    }
}