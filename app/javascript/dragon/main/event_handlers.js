import { WALL, ENTRANCE } from "./constants"

export const keydownEventHandlers = {
  " ": Space,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
}

function movable_to(game, deltaX, deltaY) {
  const vars = game._main
  const x = vars.player._x + deltaX
  const y = vars.player._y + deltaY

  if (x === 0) return false
  if (x === vars.map.width - 1) return false
  if (y === 0) return false
  if (y === vars.map.height - 1) return false

  const tile = vars.map.getTileAt(x, y, true)

  return (tile.index !== WALL)
}

function Space(game, event) {
  const vars = game._main
  const tile =
    vars.map.getTileAt(vars.player._x, vars.player._y, true)

  if (tile.index === ENTRANCE) {
    game.scene.start("cave")
  }
}

function ArrowLeft(game, event) {
  game._main.player.setFrame(0)
  if (movable_to(game, -1, 0)) game._main.player._x--
}

function ArrowRight(game, event) {
  game._main.player.setFrame(1)
  if (movable_to(game, 1, 0)) game._main.player._x++
}

function ArrowUp(game, event) {
  if (movable_to(game, 0, -1)) game._main.player._y--
}

function ArrowDown(game, event) {
  if (movable_to(game, 0, 1)) game._main.player._y++
}
