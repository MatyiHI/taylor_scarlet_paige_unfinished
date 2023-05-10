namespace SpriteKind {
    export const statue = SpriteKind.create()
    export const teleporter = SpriteKind.create()
    export const teleporter2 = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const teleporter3 = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const teleporter4 = SpriteKind.create()
    export const statue2 = SpriteKind.create()
    export const teleporter5 = SpriteKind.create()
    export const house = SpriteKind.create()
    export const npc = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    game.showLongText("?: Ah!!!! Thereʻs actually someone in this town again??", DialogLayout.Bottom)
    game.showLongText("?: I didnʻt know... That there were still others alive...", DialogLayout.Bottom)
    game.showLongText("Marin: What do you mean?", DialogLayout.Bottom)
    game.showLongText("?: Ah... itʻs not important right now. Ahem...", DialogLayout.Bottom)
    game.showLongText("?: What brings you here?", DialogLayout.Bottom)
    if (game.ask("A: I donʻt know.", "B: Tell the truth.")) {
        game.showLongText("?: You donʻt know...?", DialogLayout.Bottom)
        game.showLongText("?: Ummm... well... I donʻt know if I can help you then.", DialogLayout.Bottom)
        game.splash("Why did you lie?")
        game.gameOver(false)
    } else {
        game.showLongText("?: You want to find out more? About what?", DialogLayout.Bottom)
        game.showLongText("Marin: Well, whatʻs the deal with this world?", DialogLayout.Bottom)
        game.showLongText("?: Oh... you mean the monsters, and.. the eternal darkness, right?", DialogLayout.Bottom)
        game.showLongText("Marin: Eternal darkness?", DialogLayout.Bottom)
        game.showLongText("?: Yes. This world has been cursed by an evil witch. ", DialogLayout.Bottom)
        game.showLongText("?: Our once bright world has become a darkness filled to the brim with monsters.", DialogLayout.Bottom)
        game.showLongText("?: Many have tried to break it, but...", DialogLayout.Bottom)
        game.showLongText("Marin: But what?", DialogLayout.Bottom)
        game.showLongText("?: The witch is too powerful. She needs to be killed in order to bring our world back.", DialogLayout.Bottom)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Fireball`, mySprite, 100, 0)
    animation.runImageAnimation(
    projectile,
    assets.animation`Fireball1`,
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Mushroom3`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    sprites.destroy(mySprite9)
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    effects.hearts.startScreenEffect(1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    music.play(music.createSong(assets.song`Song4`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("Jeez... What was that? Monsters...?", DialogLayout.Bottom)
    game.showLongText("Maybe I should find a village... They'll know the deal with this world!", DialogLayout.Bottom)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    game.splash("New Objective!", "Find a village. Maybe they'll know something?")
    mySprite.sayText("Wonder where it is.", 2000, false)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Mushroom1`,
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Mushroom4`,
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter5, function (sprite, otherSprite) {
    sprites.destroy(mySprite12)
    scene.setBackgroundImage(assets.image`City`)
    mySprite.setPosition(3, 67)
    mySprite13 = sprites.create(assets.image`House`, SpriteKind.house)
    mySprite13.setPosition(108, 53)
    mySprite14 = sprites.create(assets.image`Girl`, SpriteKind.npc)
    mySprite14.setPosition(75, 67)
    animation.runImageAnimation(
    mySprite14,
    assets.animation`Girl2`,
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Mushroom2`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter2, function (sprite, otherSprite) {
    mySprite3 = sprites.create(assets.image`Left_Tree2`, SpriteKind.teleporter)
    mySprite3.setPosition(152, 73)
    mySprite.setPosition(128, 84)
    sprites.destroy(mySprite6)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    sprites.destroy(mySprite5)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    500,
    true
    )
    game.showLongText("Coins? Now this is even more weird...", DialogLayout.Bottom)
    game.showLongText("I see some more. I wonder where they go...", DialogLayout.Bottom)
    mySprite6 = sprites.create(assets.image`Coin2`, SpriteKind.teleporter3)
    animation.runImageAnimation(
    mySprite6,
    assets.animation`Coin4`,
    500,
    true
    )
    mySprite6.setPosition(151, 81)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter3, function (sprite, otherSprite) {
    mySprite10 = sprites.create(assets.image`Left_Tree1`, SpriteKind.teleporter4)
    mySprite10.setPosition(152, 71)
    sprites.destroy(mySprite6)
    sprites.destroy(mySprite4)
    mySprite.setPosition(0, 84)
    scene.cameraShake(4, 10000)
    mySprite.sayText("WHAT'S HAPPENING?!", 5000, false)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Song2`), music.PlaybackMode.UntilDone)
    game.splash("ENEMIES INCOMING", "B to shoot. Collect Heart To Win.")
    music.play(music.createSong(assets.song`Song3`), music.PlaybackMode.LoopingInBackground)
    mySprite9 = sprites.create(assets.image`Heart1`, SpriteKind.Heart)
    mySprite9.setPosition(76, 79)
    animation.runImageAnimation(
    mySprite9,
    assets.animation`Heart2`,
    100,
    true
    )
    mySprite7 = sprites.create(assets.image`Bat1`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite7,
    assets.animation`Bat3`,
    500,
    true
    )
    mySprite7.setPosition(160, 82)
    mySprite7.vx = -75
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(mySprite7)
    statusbar.setColor(7, 2)
    statusbar.setLabel("HP")
    mySprite.sayText("What the?!!", 1000, false)
    mySprite8 = sprites.create(assets.image`Ghost1`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite8,
    assets.animation`Ghost2`,
    500,
    true
    )
    mySprite8.setPosition(153, 15)
    mySprite8.vx = -75
    statusbar.value = 100
    statusbar.attachToSprite(mySprite8)
    statusbar.setColor(7, 2)
    statusbar.setLabel("HP")
    mySprite8.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter, function (sprite, otherSprite) {
    mySprite.setPosition(18, 84)
    sprites.destroy(mySprite3)
    mySprite4 = sprites.create(assets.image`Right_Tree`, SpriteKind.teleporter2)
    mySprite4.setPosition(0, 73)
    mySprite.sayText("?", 500, false)
    mySprite5 = sprites.create(assets.image`Coin1`, SpriteKind.coin)
    animation.runImageAnimation(
    mySprite5,
    assets.animation`Coin3`,
    500,
    true
    )
    mySprite5.setPosition(77, 81)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.statue, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    500,
    true
    )
    mySprite.sayText("??", 500, false)
    game.showLongText("What the heck is this? A statue in the middle of the forest?", DialogLayout.Bottom)
    game.showLongText("This is weird.. but it must mean I'm getting close to something!", DialogLayout.Bottom)
    game.showLongText("Especially since I showed up in this spooky forest...", DialogLayout.Bottom)
    game.showLongText("I'm excited, but nervous at the same time...", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.statue)
    mySprite.sayText("!!!", 1000, false)
    scene.cameraShake(4, 500)
    mySprite.sayText("Where did it go...?", 1000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter4, function (sprite, otherSprite) {
    mySprite12 = sprites.create(assets.image`Left_Tree4`, SpriteKind.teleporter5)
    mySprite12.setPosition(152, 72)
    sprites.destroy(mySprite10)
    mySprite.setPosition(9, 83)
    mySprite11 = sprites.create(assets.image`Statue1`, SpriteKind.statue2)
    mySprite11.setPosition(75, 60)
    game.showLongText("Another statue!", DialogLayout.Bottom)
    sprites.destroy(mySprite11)
    game.showLongText("It disappeared again.", DialogLayout.Bottom)
    game.showLongText("Well, I can see the village from here.", DialogLayout.Bottom)
    game.showLongText("Theyʻll definitely know something, right...?", DialogLayout.Bottom)
    mySprite.sayText("Only one way to find out. ", 1000, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value = 0
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    mySprite7 = sprites.create(assets.image`Bat2`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite7,
    assets.animation`Bat4`,
    500,
    true
    )
    mySprite7.setPosition(160, 82)
    statusbar.value = 100
    statusbar.attachToSprite(mySprite7)
    statusbar.setColor(7, 2)
    statusbar.setLabel("HP")
    mySprite7.vx = -75
})
let mySprite11: Sprite = null
let mySprite8: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let mySprite10: Sprite = null
let mySprite5: Sprite = null
let mySprite6: Sprite = null
let mySprite14: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite9: Sprite = null
let projectile: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Dark_woods`)
music.play(music.createSong(assets.song`Song1`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`Myranda`, SpriteKind.Player)
mySprite.setPosition(17, 70)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim0`,
500,
true
)
mySprite3 = sprites.create(assets.image`Left_Tree`, SpriteKind.teleporter)
mySprite3.setPosition(152, 73)
let mySprite2 = sprites.create(assets.image`Statue`, SpriteKind.statue)
mySprite2.setPosition(77, 60)
game.showLongText("It worked!!!", DialogLayout.Bottom)
game.showLongText("I'm in another world... Wow!!!", DialogLayout.Bottom)
game.showLongText("This is so cool!", DialogLayout.Bottom)
mySprite.sayText("...", 1000, false)
