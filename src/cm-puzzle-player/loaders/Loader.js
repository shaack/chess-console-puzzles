/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-puzzle-console
 * License: MIT, see file 'LICENSE'
 */
export class Loader {

    constructor(props) {
        this.props = props
    }

    load(source, props) {
        return new Promise((resolve) => {
            console.warn("overwrite in child classes, returns a pgn to callback")
            resolve()
        })
    }

}
