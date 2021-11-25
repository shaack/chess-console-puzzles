/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-puzzle-console
 * License: MIT, see file 'LICENSE'
 */
import {Component} from "../../lib/cm-web-modules/app/Component.js"
import {PgnUrlLoader} from "./loaders/PgnUrlLoader.js"
import {Observe} from "../../lib/cm-web-modules/observe/Observe.js"
import {Puzzle} from "./Puzzle.js"
import {Chessboard} from "../../lib/cm-chessboard/Chessboard.js"

export class PuzzleConsole extends Component {

    constructor(context, props) {
        // defaults
        props = Object.assign({
            mismoveFirstInPgn: false, // true for lichess type
            loader: new PgnUrlLoader("./assets/puzzles/puzzle1.pgn")
        }, props)
        super(context, props, {
            puzzle: new Puzzle()
        })
        this.elements = {
            chessboardContainer: context.querySelector(".chessboard-container"),
            controlsContainer: context.querySelector(".controls-container")
        }
        Observe.property(this.state, "puzzle", () => {
            // console.log("puzzle changed", this.state.puzzle)
            this.redraw()
        })
    }

    redraw() {
        this.chessboard = new Chessboard(this.elements.chessboardContainer, {
            position: this.state.puzzle.chess.fen()
        })
    }

    /**
     * Show a chess puzzle
     */
    loadPuzzle(id = undefined) {
        this.props.loader.load(id).then((puzzle) => {
            this.state.puzzle = puzzle
        })
    }

}