/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-puzzle-console
 * License: MIT, see file 'LICENSE'
 */
import {PuzzleDao} from "./PuzzleDao.js"
import {Puzzle} from "../Puzzle.js"
import {PgnList} from "../../../lib/cm-pgn/PgnList.js"

export class PgnUrlPuzzleDao extends PuzzleDao {

    constructor(props) {
        super(props)
        this.initialisation = this.fetchFile(this.props.url)
    }

    async fetchFile(url) {
        this.puzzleList = new PgnList()
        return await this.puzzleList.fetch(url)
    }

    getPuzzlesCount() {
        return this.puzzleList.pgns.length
    }

    getPuzzle(id) {
        console.log("getPuzzle", id)
        return new Promise((resolve) => {
            this.initialisation.then(() => {
                resolve(new Puzzle(this.puzzleList.pgns[id]))
            })
        })
    }

}