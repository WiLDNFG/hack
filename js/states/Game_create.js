var GameState = function(game) {};


GameState.prototype.create = function() {

    var testPlayfield = [
        [1, 1, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
    ];

    var grid = Grid(this.game, this.game.world.centerX, this.game.world.centerY, testPlayfield);

};