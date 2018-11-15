var Sprite = function (name, painter, behaviors) {
    if (name !== undefined) this.name = name;
    if (painter !== undefined) this.painter = painter;
    if (behaviors !== undefined) this.behaviors = behaviors;

    return this;
};

Sprite.prototype = {
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    velocityX: 0,
    velocityY: 0,
    visible: true,
    painter: undefined, // paint(sprite, ctx)
    behaviors: [], // execute(sprite, ctx, time)

    paint: function (ctx) {
        if (this.painter !== undefined && this.visible) {
            this.painter.paint(this, ctx);
        }
    },

    update: function (ctx, time) {
        for (var i = this.behaviors.length; i > 0; --i) {
            this.behaviors[i - 1].execute(this, ctx, time);
        }
    }
};
