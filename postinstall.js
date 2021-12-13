/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * License: MIT, see file 'LICENSE'
 */

const ModRator = require("modrator/src/ModRator.js")
const modrator = new ModRator(__dirname)

modrator.addToLibrary("cm-web-modules")
modrator.addToLibrary("chess.mjs")
modrator.addToLibrary("cm-chess")
modrator.addToLibrary("cm-pgn")
modrator.addToLibrary("cm-chessboard")
modrator.addToLibrary("chess-console")
modrator.addToLibrary("chess-console-stockfish")
modrator.addToLibrary("bootstrap-show-modal", "src", "bootstrap-show-modal.js")