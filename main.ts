sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    . . 1 . 1 1 1 . . . . . . . . . 
    . . 1 . . . . 1 1 1 . . . . . . 
    . . 1 . . . . . . . 1 1 1 . . . 
    . . 1 . . . . . . . . . . 1 1 1 
    . . 1 . . . . . . . 1 1 1 . . . 
    . . 1 . . . . 1 1 1 . . . . . . 
    . . 1 . 1 1 1 . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.x = 8
mySprite.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(400, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 1 1 . 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -150, 0)
    projectile.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    if (info.score() < 10) {
        projectile.vx += 100
    }
})
