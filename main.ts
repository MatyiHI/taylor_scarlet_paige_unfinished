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
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . 3 . . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . . . . . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . . . . . . 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
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
    music.play(music.createSong(hex`005a0004080a0600001c00010a006400f4016400000400000000000000000000000000050000049c0038003c0001123c004000011440004c00011b4c005400012754005c0001275c006000012560006400012580008400012584008800012488009000012490009800012098009c0001259c00a8000124c000c800011ec800cc000127cc00d8000125e800f000011df000f4000124f4000001012204010801012008010c0101200c011001012010011401012014011c01011e1c012001012220012801011902001c000c960064006d019001000478002c010000640032000000000a06000507003401380102112403001c0001dc00690000045e010004000000000000000000000564000104000307003001340102112404001c00100500640000041e000004000000000000000000000000000a040004070028012c0102112405001c000f0a006400f4010a000004000000000000000000000000000000000207002c01300102112409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800e400000001000112080009000112100011000112180019000112200021000112280029000112300031000112380039000112400041000112480049000112500051000113580059000113600061000112680069000112700071000112780079000112800081000112880089000112900091000112980099000112a000a1000112a800a9000112b000b1000112b800b9000112c000c1000112c800c9000112d000d1000112d800d9000112e000e1000112e800e9000112f000f1000112f800f9000112000101010112080109010112100111010112180119010112200121010112280129010112`), music.PlaybackMode.LoopingInBackground)
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
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d d c d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d c d d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter2, function (sprite, otherSprite) {
    mySprite3 = sprites.create(img`
        ........................
        ...........ff..........8
        ..........f88f........86
        .........ff88ff......886
        .........f8888f......866
        ........f888888f....8666
        ......ff88888888ff886666
        .....f888888888888666666
        .....ff88888888888866666
        .....f888888888888666666
        ....f88ff88888ff86688666
        ....ffff88fff88f88886688
        .....f8f8ff8ff8f88686886
        ....f88fff88ffff86688866
        ....f8ffff8fffff86888868
        ....fff88ffffff888866888
        ....f888ffff8fff86668888
        ...f888ff8f88f8866688686
        ..f8888888888f8666666666
        .f88f8888888886686666666
        .fff88888888888866666666
        .ff888888888888666666666
        ..ff88f888f88f8866866686
        ..f8ff88fff88f8688668886
        .f88ff8ff8f8f86688688686
        f88ff8ff88ff866886886688
        ffff88f88fff888866866888
        .ffffffffffff88888888888
        .ff888ff88ff888666886688
        .f888ff888ff886668866688
        f888888888f8866666666686
        fff888f88888888666866666
        ..ffff88f888888888668666
        .....f8ff88f888ff8688668
        ......fff8fff88fff888688
        .........ffeeff......88e
        .........feeeef......fee
        .........feeeef......fee
        ........feeefeef....feee
        ........fefeffef....fefe
        `, SpriteKind.teleporter)
    mySprite3.setPosition(152, 73)
    mySprite.setPosition(128, 84)
    sprites.destroy(mySprite6)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    sprites.destroy(mySprite5)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    game.showLongText("Coins? Now this is even more weird...", DialogLayout.Bottom)
    game.showLongText("I see some more. I wonder where they go...", DialogLayout.Bottom)
    mySprite6 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.teleporter3)
    animation.runImageAnimation(
    mySprite6,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    mySprite6.setPosition(151, 81)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter3, function (sprite, otherSprite) {
    mySprite10 = sprites.create(img`
        ........................
        ...........ff..........8
        ..........f88f........86
        .........ff88ff......886
        .........f8888f......866
        ........f888888f....8666
        ......ff88888888ff886666
        .....f888888888888666666
        .....ff88888888888866666
        .....f888888888888666666
        ....f88ff88888ff86688666
        ....ffff88fff88f88886688
        .....f8f8ff8ff8f88686886
        ....f88fff88ffff86688866
        ....f8ffff8fffff86888868
        ....fff88ffffff888866888
        ....f888ffff8fff86668888
        ...f888ff8f88f8866688686
        ..f8888888888f8666666666
        .f88f8888888886686666666
        .fff88888888888866666666
        .ff888888888888666666666
        ..ff88f888f88f8866866686
        ..f8ff88fff88f8688668886
        .f88ff8ff8f8f86688688686
        f88ff8ff88ff866886886688
        ffff88f88fff888866866888
        .ffffffffffff88888888888
        .ff888ff88ff888666886688
        .f888ff888ff886668866688
        f888888888f8866666666686
        fff888f88888888666866666
        ..ffff88f888888888668666
        .....f8ff88f888ff8688668
        ......fff8fff88fff888688
        .........ffeeff......88e
        .........feeeef......fee
        .........feeeef......fee
        ........feeefeef....feee
        ........fefeffef....fefe
        `, SpriteKind.teleporter4)
    mySprite10.setPosition(152, 71)
    sprites.destroy(mySprite6)
    sprites.destroy(mySprite4)
    mySprite.setPosition(0, 84)
    scene.cameraShake(4, 10000)
    mySprite.sayText("WHAT'S HAPPENING?!", 5000, false)
    music.stopAllSounds()
    music.play(music.createSong(hex`003c000408020800001c00010a006400f40164000004000000000000000000000000000500000418000c001000011e1c002000011e38003c0001123c004000011401001c000f05001202c102c20100040500280000006400280003140006020004370004000800012408000c0001270c001000012710001400011d18001c00012c2000240001202400280001252c003000021d2c38003c00012403001c0001dc00690000045e01000400000000000000000000056400010400033c0000000800012a08000c00012410001400012c1400180001241c002000012924002800012c28002c00012530003400012034003c0001293c004000012504001c00100500640000041e000004000000000000000000000000000a04000436000000040002192c08000c000119100014000319242c18001c0001192000240002192428002c0002192c30003400011938003c0002192c05001c000f0a006400f4010a00000400000000000000000000000000000000022a000400080001200c001000012c1400180001271c00200001202400280001293000340001243c004000012c07001c00020a006400f401640000040000000000000000000000000000000003300000000400011e0c001000012918001c00012924002800012228002c00011e30003400012934003800011d38003c00012208001c000e050046006603320000040a002d00000064001400013200020100023c0000000400012704000800012c0c00100001221400180001201c002000012520002400012c28002c0001222c003000012934003800012c38003c00012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80038000000010002120108000900021201100011000212011800190002120120002100021201280029000212013000310002120138003900021201`), music.PlaybackMode.UntilDone)
    game.splash("ENEMIES INCOMING", "B to shoot. Collect Heart To Win.")
    music.play(music.createSong(hex`0078000408080205001c000f0a006400f4010a0000040000000000000000000000000000000002ae0000001000012210001400012514001800012218002400012724003000012230003400012434003c00011d3c004800012948005400012754005c00012a5c006400012964006c0001276c007400012574008400012984008800012a88008c0001298c00900001279000a0000127a000a8000125a800ac000124ac00b4000122b400b8000125b800bc000124bc00c0000122c000c4000125c400c8000124c800cc000122cc00d800011ed800f400012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80074010000010001050400050001050800090001020c000d0001021000110001051400150001051800190001021c001d0001022000210001052400250001052800290001022c002d0001023000310001053400350001053800390001023c003d0001024000410001054400450001054800490001024c004d0001025000510001055400550001055800590001025c005d0001026000610001056400650001056800690001026c006d0001027000710001057400750001057800790001027c007d0001028000810001058400850001058800890001028c008d0001029000910001059400950001059800990001029c009d000102a000a1000105a400a5000105a800a9000102ac00ad000102b000b1000105b400b5000105b800b9000102bc00bd000102c000c1000105c400c5000105c800c9000102cc00cd000102d000d1000105d400d5000105d800d9000102dc00dd000102e000e1000105e400e5000105e800e9000102ec00ed000102f000f1000105f400f5000105`), music.PlaybackMode.LoopingInBackground)
    mySprite9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 3 3 3 f f f 3 3 3 f f . 
        . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
        . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
        . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f f 3 3 3 b b b 3 3 3 f f . 
        . . . f f 3 b b b b b 3 f f . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Heart)
    mySprite9.setPosition(76, 79)
    animation.runImageAnimation(
    mySprite9,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 3 3 3 f f f 3 3 3 f f . 
        . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
        . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
        . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f f 3 3 3 b b b 3 3 3 f f . 
        . . . f f 3 b b b b b 3 f f . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . f f f f f f . 
        . f f 3 3 3 3 f f f 3 3 3 3 f f 
        . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
        . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
        . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
        . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
        . f 3 3 3 3 b b b b b 3 3 3 3 f 
        . f f 3 3 b b b b b b b 3 3 f f 
        . . f f 3 b b b b b b b 3 f f . 
        . . . f f b b b b b b b f f . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . . . . f 3 3 3 f 3 3 3 f . . . 
        . . . . f 3 3 3 3 3 1 3 f . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 b b b 3 f . . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    mySprite7 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite7,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
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
    mySprite8 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite8,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `],
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
    mySprite4 = sprites.create(img`
        ........................
        8..........ff...........
        68........f88f..........
        688......ff88ff.........
        668......f8888f.........
        6668....f888888f........
        666688ff88888888ff......
        666666888888888888f.....
        66666888888888888ff.....
        666666888888888888f.....
        66888668f88888fff88f....
        8668688888fff88f8fff....
        8868668f8ff8ff8f88f.....
        8888868fff88fffff8f.....
        88888888ff8fffffffff....
        888668888ffffff88fff....
        68886668ffff8fff888f....
        6868866688f88f8ff888f...
        6866666688888f888888f...
        666666666888888888888f..
        66666666868888888888f8f.
        666666666888888888888ff.
        6866668666888f8888f888f.
        6886866886688ff8f88ff88f
        866888688888f88fff8fffff
        8866888868ffff88ffff8f..
        88868688668ffff8f8ff88f.
        88888668868ffffff88ff8f.
        68868868688f8ff8ff8f8ff.
        66866666668888f8888888ff
        66666666666888888888888f
        66666866688888888f888ff.
        666666888888888888ffff..
        6668868ff88f888ff8f.....
        8668888ff8fff88ffff.....
        e88......ffeeff.........
        eef......feeeef.........
        eef......feeeef.........
        feef....feeefeef........
        ffef....fefeffef........
        `, SpriteKind.teleporter2)
    mySprite4.setPosition(0, 73)
    mySprite.sayText("?", 500, false)
    mySprite5 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    mySprite5,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    mySprite5.setPosition(77, 81)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.statue, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
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
    mySprite12 = sprites.create(img`
        ........................
        ...........ff..........8
        ..........f88f........86
        .........ff88ff......886
        .........f8888f......866
        ........f888888f....8666
        ......ff88888888ff886666
        .....f888888888888666666
        .....ff88888888888866666
        .....f888888888888666666
        ....f88ff88888ff86688666
        ....ffff88fff88f88886688
        .....f8f8ff8ff8f88686886
        ....f88fff88ffff86688866
        ....f8ffff8fffff86888868
        ....fff88ffffff888866888
        ....f888ffff8fff86668888
        ...f888ff8f88f8866688686
        ..f8888888888f8666666666
        .f88f8888888886686666666
        .fff88888888888866666666
        .ff888888888888666666666
        ..ff88f888f88f8866866686
        ..f8ff88fff88f8688668886
        .f88ff8ff8f8f86688688686
        f88ff8ff88ff866886886688
        ffff88f88fff888866866888
        .ffffffffffff88888888888
        .ff888ff88ff888666886688
        .f888ff888ff886668866688
        f888888888f8866666666686
        fff888f88888888666866666
        ..ffff88f888888888668666
        .....f8ff88f888ff8688668
        ......fff8fff88fff888688
        .........ffeeff......88e
        .........feeeef......fee
        .........feeeef......fee
        ........feeefeef....feee
        ........fefeffef....fefe
        `, SpriteKind.teleporter5)
    mySprite12.setPosition(152, 72)
    sprites.destroy(mySprite10)
    mySprite.setPosition(9, 83)
    mySprite11 = sprites.create(img`
        ................
        .......ddd......
        ......dbbb......
        ......dbdd......
        ......bddd......
        ......bcdbd.....
        ......cbcbdd....
        ......bdbdbd....
        .....cbdbdcd....
        .....cbbbddb....
        .....cfbdbdd....
        ....bcfbddbd....
        ....bcfdddd.....
        ....bfbdddd.....
        ...bbfdddddb....
        ...dcbdddddd....
        .....bdddddd....
        .....bddbddd....
        .....bddbdddb...
        .ccccbddbddddcc.
        cdddbbdbbddddbdc
        bddbdbdbbddbdbdb
        bddbdddbbddbbbdb
        bdddbddbbddbbddb
        bddddbbbbbbbbddb
        bdddddbbbbbddddb
        cddddddddddddddc
        bccddddddddddccb
        dbbbbbbbbbbbbbbd
        dbbbbccccccbbbbd
        cbbbbbbbbbbbbbbc
        fccccccccccccccf
        `, SpriteKind.statue2)
    mySprite11.setPosition(76, 76)
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
    mySprite7 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite7,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
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
let mySprite12: Sprite = null
let mySprite8: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let mySprite10: Sprite = null
let mySprite5: Sprite = null
let mySprite6: Sprite = null
let mySprite9: Sprite = null
let projectile: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6668866666666686666666666666666666666666666886666666668666666666666666666666666666688666666666866666666666666666666666666668866666666686666666666666666666666666
    6888666666666886666666666666666666666686688866666666688666666666666666666666668668886666666668866666666666666666666666866888666666666886666666666666666666666666
    6686688666886688666688666666666666666688668668866688668866668866666666666666668866866886668866886666886666666666666666886686688666886688666688666666666666666666
    8888886686688688668688666666666666668868888888668668868866868866666666666666886888888866866886886686886666666666666688688888886686688688668688666666666666668866
    8888866688688888688886666666666666888866888886668868888868888666666666666688886688888666886888886888866666666666668888668888866688688888688886666666666666888866
    8888868888888868888866686666668886668886888886888888886888886668666666888666888688888688888888688888666866666688866688868888868888888868888866686666668886668886
    8888888888888668866888886688866688666888888888888888866886688888668886668866688888888888888886688668888866888666886668888888888888888668866888886688866688666888
    8888888888888688886688866866886688888888888888888888868888668886686688668888888888888888888886888866888668668866888888888888888888888688886688866866886688888888
    88c888888888888888888886886668868888888888c888888888888888888886886668868888888888c888888888888888888886886668868888888888c8888888888888888888868866688688888888
    88c8888888888888888888888c6668888888888888c8888888888888888888888c6668888888888888c8888888888888888888888c6668888888888888c8888888888888888888888c66688888888888
    88c8888888888888888888888cc668888888888888c8888888888888888888888cc668888888888888c8888888888888888888888cc668888888888888c8888888888888888888888cc6688888888888
    88c8888888fcc88888888ff88ccc88888888888888c8888888fcc88888888ff88ccc88888888888888c8888888fcc88888888ff88ccc88888888888888c8888888fcc88888888ff88ccc888888888888
    88c888888ffbcc888888bbf888cc88888888888888c888888fffcc888888fff888cc88888888888888c888888fffcc888888fff888cc88888888888888c888888fffcc888888fff888cc888888888888
    8cc888988ff66ccc8f888bff88cc8888888888888cc888988ff66ccc8f888bff88cc8888888888888cc888988ff66ccc8f888bff88cc8888888888888cc888988ff66ccc8f888bff88cc888888888888
    8cc888bf88f6bfcccff88bff88ccc888888888888cc888bf88f6bfcccff88bff88ccc888888888888cc888bf88f6bfcccff88bff88ccc888888888888cc888bf88f6bfcccff88bff88ccc88888888888
    8cc88bbffffbff6ccffbbbf8888cc888888888888cc88bbffffbff6ccffbbbf8888cc888888888888cc88bbffffbff6ccffbbbf8888cc888888888888cc88bbffffbff6ccffbbbf8888cc88888888888
    ccc888bffffbff6ccffbbff88fbccc88f8888888ccc888bffffbff6ccffbbff88fbccc88f8888888ccc888bffffbff6ccffbbff88fbccc88f8888888ccc888bffffbff6ccffbbff88fbccc88f8888888
    cccbb8bff1fbfffcccfbbfffff6ccc88fff88888cccbb8bffffbfffcccfbbfffff6ccc88fff88888cccbb8bffffbfffcccfbbfffff6ccc88fff88888cccbb8bffffbfffcccfbbfffff6ccc88fff88888
    ccc6bbbffffbffffccfbbffffb6cccf8ff888888ccc6bbbffffbffffccfbbffffb6cccf8ff888888ccc6bbbffffbffffccfbbffffb6cccf8ff888888ccc6bbbffffbffffccfbbffffb6cccf8ff888888
    ccc6bbbfffbfffffcccbbffffbfcccffff88ff88ccc6bbbfffbfffffcccbbffffbfcccffff88ff88ccc6bbbfffbfffffcccbbffffbfcccffff88ff88ccc6bbbfffbfffffcccbbffffbfcccffff88ff88
    cccbbbbfffbffffffccbbffffbfccccffffbfff8cccbbbbfffbffffffccbbffffbfccccffffbfff8cccbbbbfffbffffffccbbffffbfccccffffbfff8cccbbbbfffbffffffccbbffffbfccccffffbfff8
    ccfbbbbffbbfffffffccffffbbfccccffffbffffccfbbbbffbbfffffffccffffbbfccccffffbffffccfbbbbffbbfffffffccffffbbfccccffffbffffccfbbbbffbbfffffffccffffbbfccccffffbffff
    ccffbbbbbfffff1fffcccfffbfffcccffffbffffccffbbbbbfffffffffcccfffbfffcccffffbffffccffbbbbbfffffffffcccfffbfffcccfff1bffffccffbbbbbfffffffffcccfffbfffcccff1fbffff
    ccffbbbbffffffffffbccccbbfffcccffffbfffcccffbbbbffffffffffbccccbbfffcccffffbfffcccffbbbbffffffffffbccccbbfffcccffffbfffcccffbbbbffffffffffbccccbbfffcccffffbfffc
    ccffbbbfffffffffffbbccccffffccccfffbfffcccffbbbfffffffffffbbccccffffccccfffbfffcccffbbbffffff1ffffbbccccffffccccfffbfffcccffbbbfffffffffffbbccccffffccccfffbfffc
    ccffbbbfffffffffffbbccccccffccccfffbfffcccffbbbfffffffffffbbccccccffccccfffbfffcccffbbbfffffffffffbbccccccffccccfffbfffcccffbbbfffff1fffffbbccccccffccccfffbfffc
    cffffbbffffffffffbbbbccccccccccccfffbffccffffbbffffffffffbbbbccccccccccccfffbffccffffbbffffffffffbbbbccccccccccccfffbffccffffbbffffffffffbbbbccccccccccccfffbffc
    cffffbbbfffffffffbbfffffcccccccccfffbffccffffbbbfffffffffbbfffffcccccccccfffbffccffffbbbfffffffffbbfffffcccccccccfffbffccffffbbbfffffffffbbfffffcccccccccfffbffc
    cffffbbbbffffffffbbffffffccccccccfffbfcccffffbbbbffffffffbbffffffccccccccfffbfcccffffbbbbffffffffbbffffffccccccccfffbfcccffffbbbbffffffffbbffffffccccccccfffbfcc
    cffffbbbbbffffffbbbfffffffcccccccfffbccccffffbbbbbffffffbbbfffffffcccccccfffbccccffffbbbbbffffffbbbfffffffcccccccfffbccccffffbbbbbffffffbbbfffffffcccccccfffbccc
    bbfffffbbbbbffffbbbfffffffffcccccfffccccbbfffffbbbbbffffbbbfffffffffcccccfffccccbbfffffbbbbbffffbbbfffffffffcccccfffccccbbfffffbbbbbffffbbbfffff1fffcccccfffcccc
    fbfffffbbbbbbbfbbbffffffffffcccccffccccffbfffffbbbbbbbfbbbffffffffffcccccffccccffbfffffbbbbbbbfbbbffffffffffcccccffccccffbfffffbbbbbbbfbbbffffffffffcccccffccccf
    fbffffffbbbbbbbbbbffffffffffcccccffcccfffbffffffbbbbbbbbbbffffff1fffcccccffcccfffbffffffbbbbbbbbbbffffffffffcccccffcccfffbffffffbbbbbbbbbbffffffffffcccccffcccff
    fbffffffbbbbbbbbbfffffffffffcccccffccffffbffffffbbbbbbbbbfffffffffffcccccffccffffbffffffbbbbbbbbbffffff1ffffcccccffccffffbffffffbbbbbbbbbfffffffffffcccccffccfff
    fbbfffffbbbbbbbfffffffffffffcccccffccbfffbbfffffbbbbbbbfffffffffffffcccccffccbfffbbfffffbbbbbbbfffffff111fffcccccffccbfffbbfffffbbbbbbbfffffffffffffcccccffccbff
    ffbbffffbbbbbbffffffffffffffcccccffccbffffbbffffbbbbbbffffffffffffffcccccffccbffffbbffffbbbbbbfffffffff1ffffcccccffccbffffbbffffbbbbbbffffffffffffffcccccffccbff
    ffbbbfffbbbbbbfffffffff1ffffcccccfcccbbfffbbbfffbbbbbbffffffffffffffcccccfcccbbfffbbbfffbbbbbbffffffffffffffcccccfcccbbfffbbbfffbbbbbbffffffffffffffcccccfcccbbf
    ffffbbbbbbbbbbfffffffffffffccccccfcccfbfffffbbbbbbbbbbfffffffffffffccccccfcccfbfffffbbbbbbbbbbfffffffffffffccccccfcccfbfffffbbbbbbbbbbfffffffffffffccccccfcccfbf
    ffffbbbbbbbbbbfffffffffffffcccccccccffbfffffbbbbbbbbbbfffffffffffffcccccccccffbfffffbbbbbbbbbbfffffffffffffcccccccccffbfffffbbbbbbbbbbfffffffffffffcccccccccffbf
    ffffffbbbbbbbbfffffffffffffcccccccccffbbffffffbbbbbbbbfffffffffffffcccccccccffbbffffffbbbbbbbbfffffffffffffcccccccccffbbffffffbbbbbbbbfffffffffffffcccccccccffbb
    bfffffffbbbbbbffffffffffffcccccccccffffbbfffffffbbbbbbffffffffffffcccccccccffffbbfffffffbbbbbbffffffffffffcccccccccffffbbfffffffbbbbbbffff1fffffffcccccccccffffb
    bbfffffffbbbbbffffffffffffcccccccccfffffbbfffffffbbbbbffffffffffffcccccccccfffffbbfffffffbbbbbffffffffffffcccccccccfffffbbfffffffbbbbbffffffffffffcccccccccfffff
    bbfffffffbbbbbffffffffffffccccccccffffffbbfffffffbbbbbffffffffffffccccccccffffffbbfffffffbbbbbffffffffffffccccccccffffffbbfffffffbbbbbffffffffffffccccccccffffff
    9bfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    9bfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    9bfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfff1fffbbbbbfffffffffffcccccccccffffff
    9bfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    9bbffffffbbbbbfffffffffffccccccccffffffffbbff1fffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccfffffff
    9bbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccfffffff
    bbbffffffbbbbbfffffffffffccccccccfffffffbbbffffffbbbbbfffffffffffccccccccfffffffbbbffffffbbbbbfffffffffffccccccccfffffffbbbffffffbbbbbfffffffffffccccccccfff1fff
    bbfffffffbbbbbfffffffffffccccccccfffffffbbfffffffbbbbbfffffffffffccccccccfffffffbbfffffffbbbbbfffffffffffccccccccffff1ffbbfffffffbbbbbfffffffffffccccccccfffffff
    bbffff1ffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccffff1ffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffff
    bbfff111fbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffff
    bbffff1ffbbbbbbffffffffffcccccccfff1ffffbbfffffffbbbbbbffffffffffcccccccffffffffbbfffffffbbbbbbffffffffffcccccccffffffffbbfffffffbbbbbbffffffffffcccccccffffffff
    bffffffffbbbbbbffffffffffcccccccfffffffbbffffffffbbbbbbffffffffffcccccccfffffffbbffffffffbbbbbbffffffffffcccccccfffffffbbffffffffbbbbbbffffff1fffcccccccfffffffb
    bffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbb
    bffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbb
    fffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbb
    fffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbb
    fffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbb
    fffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbb
    fffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffff1fffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbb
    fffffffffbbbbbbbbffffffffcccccccffffbbbffffffffffbbbbbbbbffffffffcccccccffffbbbffffffffffbbbbbbbbffffffffcccccccffffbbbffffffffffbbbbbbbbffffffffcccccccffffbbbf
    ffffffffffbbbbbbbbffffffccccccccffffbbbfffffffffffbbbbbbbbffffffccccccccffffbbbfffffffffffbbbbbbbbffffffccccccccffffbbbfffffffffffbbbbbbbbffffffccccccccffffbbbf
    bfffffffffbbbbbbbbffffffccccccccbbbbbbbbbfffffffffbbbbbbbbffffffccccccccbbbbbbbbbfffffffffbbbbbbbbffffffccccccccbbbbbbbbbfffffffffbbbbbbbbffffffccccccccbbbbbbbb
    bbbbbfffffbbbbbbbbffffffcccccccccbbbbbbbbbbbbfffffbbbbbbbbffffffcccccccccbbbbbbbbbbbbfffffbbbbbbbbffffffcccccccccbbbbbbbbbbbbfffffbbbbbbbbffffffcccccccccbbbbbbb
    bbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbbbbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbbbbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbbbbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbb
    bbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.createSong(hex`005a0004080a0600001c00010a006400f4016400000400000000000000000000000000050000049c0038003c0001123c004000011440004c00011b4c005400012754005c0001275c006000012560006400012580008400012584008800012488009000012490009800012098009c0001259c00a8000124c000c800011ec800cc000127cc00d8000125e800f000011df000f4000124f4000001012204010801012008010c0101200c011001012010011401012014011c01011e1c012001012220012801011902001c000c960064006d019001000478002c010000640032000000000a06000507003401380102112403001c0001dc00690000045e010004000000000000000000000564000104000307003001340102112404001c00100500640000041e000004000000000000000000000000000a040004070028012c0102112405001c000f0a006400f4010a000004000000000000000000000000000000000207002c01300102112409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800e400000001000112080009000112100011000112180019000112200021000112280029000112300031000112380039000112400041000112480049000112500051000113580059000113600061000112680069000112700071000112780079000112800081000112880089000112900091000112980099000112a000a1000112a800a9000112b000b1000112b800b9000112c000c1000112c800c9000112d000d1000112d800d9000112e000e1000112e800e9000112f000f1000112f800f9000112000101010112080109010112100111010112180119010112200121010112280129010112`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
mySprite.setPosition(18, 84)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
mySprite3 = sprites.create(img`
    ........................
    ...........ff..........8
    ..........f88f........86
    .........ff88ff......886
    .........f8888f......866
    ........f888888f....8666
    ......ff88888888ff886666
    .....f888888888888666666
    .....ff88888888888866666
    .....f888888888888666666
    ....f88ff88888ff86688666
    ....ffff88fff88f88886688
    .....f8f8ff8ff8f88686886
    ....f88fff88ffff86688866
    ....f8ffff8fffff86888868
    ....fff88ffffff888866888
    ....f888ffff8fff86668888
    ...f888ff8f88f8866688686
    ..f8888888888f8666666666
    .f88f8888888886686666666
    .fff88888888888866666666
    .ff888888888888666666666
    ..ff88f888f88f8866866686
    ..f8ff88fff88f8688668886
    .f88ff8ff8f8f86688688686
    f88ff8ff88ff866886886688
    ffff88f88fff888866866888
    .ffffffffffff88888888888
    .ff888ff88ff888666886688
    .f888ff888ff886668866688
    f888888888f8866666666686
    fff888f88888888666866666
    ..ffff88f888888888668666
    .....f8ff88f888ff8688668
    ......fff8fff88fff888688
    .........ffeeff......88e
    .........feeeef......fee
    .........feeeef......fee
    ........feeefeef....feee
    ........fefeffef....fefe
    `, SpriteKind.teleporter)
mySprite3.setPosition(152, 73)
let mySprite2 = sprites.create(img`
    ................
    .......ddd......
    ......dbbb......
    ......dbdd......
    ......bddd......
    ......bcdbd.....
    ......cbcbdd....
    ......bdbdbd....
    .....cbdbdcd....
    .....cbbbddb....
    .....cfbdbdd....
    ....bcfbddbd....
    ....bcfdddd.....
    ....bfbdddd.....
    ...bbfdddddb....
    ...dcbdddddd....
    .....bdddddd....
    .....bddbddd....
    .....bddbdddb...
    .ccccbddbddddcc.
    cdddbbdbbddddbdc
    bddbdbdbbddbdbdb
    bddbdddbbddbbbdb
    bdddbddbbddbbddb
    bddddbbbbbbbbddb
    bdddddbbbbbddddb
    cddddddddddddddc
    bccddddddddddccb
    dbbbbbbbbbbbbbbd
    dbbbbccccccbbbbd
    cbbbbbbbbbbbbbbc
    fccccccccccccccf
    `, SpriteKind.statue)
mySprite2.setPosition(76, 76)
game.showLongText("It worked!!!", DialogLayout.Bottom)
game.showLongText("I'm in another world... Wow!!!", DialogLayout.Bottom)
game.showLongText("This is so cool!", DialogLayout.Bottom)
mySprite.sayText("...", 1000, false)
