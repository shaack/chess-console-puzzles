/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/chess-console-puzzles
 * License: MIT, see file 'LICENSE'
 */

const API_PREFIX = "/api/v1/puzzle"

export class PuzzleDao {

    constructor(props) {
        this.props = props
    }

    find(id) {
        return fetch(this.props.baseUrl + API_PREFIX + "/puzzles/" + id)
    }

    search(query) {
        return fetch(this.props.baseUrl + API_PREFIX + "?" + query)
    }
}
