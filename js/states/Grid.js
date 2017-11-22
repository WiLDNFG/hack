var Grid = function(game, x, y, grid) {
    var self = this;

    for (var y1 = 0; y1 < grid.length; y1++) {
        for (var x1 = 0; x1 < grid[y1].length; x1++) {
                 var box = game.add.sprite((x1 * g_game.GRID_SIZE) + x, (y1 * g_game.GRID_SIZE) + y, 'grid');
        }
    }


}

Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;