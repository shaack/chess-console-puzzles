/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-puzzle-console
 * License: MIT, see file 'LICENSE'
 */
import {Component} from "../../lib/cm-web-modules/app/Component.js"
import {PgnUrlLoader} from "./loaders/PgnUrlLoader.js"

export class PuzzleConsole extends Component {

    constructor(context, props) {
        // defaults
        props = Object.assign({
            mismoveFirstInPgn: false, // true for lichess type
            loader: new PgnUrlLoader("./assets/puzzles/puzzle1.pgn")
        }, props)
        super(context, props, {
            puzzle: undefined
        })
    }

    /**
     * Show a chess puzzle
     * @param pgn The pgn containing the puzzle
     * @param index The index of the puzzle in the pgn, if it contains more than one
     */
    loadPuzzle(pgn, index = 0) {
        this.state.puzzle = this.props.loader.load()
    }
}