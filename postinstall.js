/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * License: MIT, see file 'LICENSE'
 */

const LibraryManager = require("cm-web-modules/src/LibraryManager.js")
const manager = new LibraryManager(__dirname)

manager.addPackage("cm-web-modules")
manager.addPackage("chess.mjs")
manager.addPackage("cm-chess")
manager.addPackage("cm-pgn")
manager.addPackage("cm-chessboard")
manager.addPackage("chess-console")
manager.addPackage("chess-console-stockfish")
manager.addPackage("bootstrap-show-modal", "src", "bootstrap-show-modal.js")