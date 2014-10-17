var BgLayer = cc.Layer.extend({
    btn : null,
    ctor : function(){
        this._super();

        this.btn = new cc.Sprite(res.CloseNormal_png);
        this.btn.attr({
            x:100,
            y:100
        })
        this.addChild(this.btn);

        this.btn.runAction(cc.moveBy(2, 100, 200));
        this.btn.runAction(cc.rotateTo(2, 50.0));
        //this.schedule(this.updateSprite, 0.5);

        return true;
    },
    updateSprite : function(){
        var step = 20;
        var fxX = 1, fxY = 1;
        var maxX = cc.winSize.width - this.btn.width / 2;
        var maxY = cc.winSize.height - this.btn.height / 2;
        var minX = this.btn.width / 2;
        var minY = this.btn.height / 2;
        if (this.btn.x > maxX){
            fxX = fxX * -1;
        }
        if (this.btn.x < minX){
            fxX = fxX * -1;
        }
        if (this.btn.y > maxY){
            fxY = fxY * -1;
        }
        if (this.btn.y < minY){
            fxY = fxY * -1;
        }

        this.btn.x += step * fxX;
        this.btn.y += step * fxY;
    }


});

var DongboScene = cc.Scene.extend({
    onEnter : function(){
        this._super();

        this.addChild(new BgLayer());
        console.log('dongbo scene');
    }
});