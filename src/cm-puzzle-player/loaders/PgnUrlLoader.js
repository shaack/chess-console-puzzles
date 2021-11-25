/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-puzzle-console
 * License: MIT, see file 'LICENSE'
 */
import {Loader} from "./Loader.js"
import {Puzzle} from "../Puzzle.js"

export class PgnUrlLoader extends Loader {

    constructor(props) {
        super(props)
    }

    load() {
        return new Promise((resolve) => {
            fetch(this.props.pgnUrl).then(function (response) {
                response.text().then(function (pgn) {
                    resolve(new Puzzle(pgn))
                })
            })
        })
    }

}