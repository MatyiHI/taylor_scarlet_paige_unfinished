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
    export const npc1kneeling = SpriteKind.create()
    export const teleporter6 = SpriteKind.create()
    export const statuedecoration = SpriteKind.create()
    export const mysteriousobject = SpriteKind.create()
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
        sprites.destroy(mySprite)
        sprites.destroy(mySprite14)
        sprites.destroy(mySprite4)
        scene.setBackgroundColor(15)
        game.showLongText("After lying to the girl, she disappeared.", DialogLayout.Bottom)
        game.showLongText("You ended up wandering and wandering and wandering...", DialogLayout.Bottom)
        game.showLongText("And eventually, you died.", DialogLayout.Bottom)
        game.showLongText("Could things have changed if you told the truth?", DialogLayout.Bottom)
        game.splash("I guess youʻll never know.")
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
        game.showLongText("Marin: Well, if she needs to die, why canʻt I just beat her?", DialogLayout.Bottom)
        game.showLongText("?: Ahaha... AHAHAHAHAHA", DialogLayout.Bottom)
        game.showLongText("Marin: ...", DialogLayout.Bottom)
        game.showLongText("?: Ahaha... I havenʻt laughed like that in a while.", DialogLayout.Bottom)
        game.showLongText("?: Surely youʻre joking, right?", DialogLayout.Bottom)
        game.showLongText("Marin: ...", DialogLayout.Bottom)
        game.showLongText("?: Thereʻs no way you can beat the witch. Youʻd have to be the chosen one.", DialogLayout.Bottom)
        game.showLongText("Marin: Chosen one?", DialogLayout.Bottom)
        game.showLongText("?: Oh, did I not tell you?", DialogLayout.Bottom)
        game.showLongText("?: The chosen one is going to be our savior.", DialogLayout.Bottom)
        game.showLongText("?: They appeared in a prophecy many many years ago.", DialogLayout.Bottom)
        game.showLongText("Marin: Prophecy?", DialogLayout.Bottom)
        game.showLongText("?: The mermaids foresaw it. They saw that the chosen one would kill the witch.", DialogLayout.Bottom)
        game.showLongText("?: But the chosen one hasnʻt appeared yet...", DialogLayout.Bottom)
        game.showLongText("?: Thatʻs why many tried to kill the witch. Alas, they failed...", DialogLayout.Bottom)
        game.showLongText("Marin: I see... well, what if I was the chosen one.", DialogLayout.Bottom)
        game.showLongText("?: Thatʻs... possible. If so, youʻd have to- COUGH...", DialogLayout.Bottom)
        game.showLongText("Marin: Are you okay?", DialogLayout.Bottom)
        game.showLongText("?: I am very sick. My health is deteriorating. Quick, cough...", DialogLayout.Bottom)
        game.showLongText("?: Go to the mermaid cove outside town. Theyʻll tell you everything.", DialogLayout.Bottom)
        game.showLongText("?: Ask them about the prophecy- COUGH, COUGH...", DialogLayout.Bottom)
        game.showLongText("?: For the sake of our world... please...", DialogLayout.Bottom)
        game.showLongText("Marin: I got it.", DialogLayout.Bottom)
    }
    sprites.destroy(mySprite14)
    mySprite13 = sprites.create(assets.image`npc_1_hurt`, SpriteKind.npc1kneeling)
    mySprite13.setPosition(75, 57)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.mysteriousobject, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter6, function (sprite, otherSprite) {
    mySprite.setPosition(3, 52)
    sprites.destroy(mySprite13)
    sprites.destroy(mySprite4)
    mySprite15 = sprites.create(img`
        ................................................................
        ................................................................
        ............................dddddd..............................
        ..........................ddbbbbbb..............................
        ..........................ddbbbbbb..............................
        ..........................ddbbbbbb..............................
        ..........................ddbddddd..............................
        ..........................bbdddddd..............................
        ..........................bbdddddd..............................
        ..........................bbdddddd..............................
        ..........................bbcdddbbdd............................
        ..........................ccbcccbbddd...........................
        ..........................ccbcccbbddd...........................
        ..........................ccbcccbbddd...........................
        ..........................bbdbbbddbbd...........................
        ..........................bbdbbbddbbd...........................
        .........................cbbdbbbddccd...........................
        .........................cbbdbbbddccd...........................
        .........................cbbbbbbddddb...........................
        .........................cbbbbbbddddb...........................
        .........................cffbdddbbddd...........................
        .........................cffbdddbbddd...........................
        ......................bbbcffbdddddbbd...........................
        ......................bbbcffbdddddbbd...........................
        ......................bbbcffdddddddd............................
        ......................bbbcffdddddddd............................
        ......................bbbfbbdddddddd............................
        ....................bbbbbfddddddddddb...........................
        ....................bbbbbfddddddddddb...........................
        ....................bbbbbfddddddddddb...........................
        ....................ddcccbddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bdddbbbddddd...........................
        .........................bdddbbbdddddbb.........................
        .........................bdddbbbdddddbb.........................
        .........................bdddbbbdddddbb.........................
        ................cccccccccbdddbbbdddddddccccc....................
        .............cccddddddbbbbddbbbbdddddddbbbddc...................
        .............cccddddddbbbbddbbbbdddddddbbbddc...................
        .............cccddddddbbbbddbbbbdddddddbbbddc...................
        .............bbbddddbbdddbddbbbbddddbddbbbddb...................
        .............bbbddddbbddddddbbbbddddbbbbbbddb...................
        .............bbbddddbbddddddbbbbddddbbbbbbddb...................
        .............bbbddddddbbbdddbbbbddddbbbdddddb...................
        .............bbbddddddbbbdddbbbbddddbbbdddddb...................
        .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
        .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
        .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
        .............bbbddddddddddbbbbbbbbbbddddddddb...................
        .............bbbddddddddddbbbbbbbbbbddddddddb...................
        .............cccddddddddddddddddddddddddddddc...................
        .............cccddddddddddddddddddddddddddddc...................
        .............bbbccccdddddddddddddddddddcccccb...................
        .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
        .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
        .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
        .............dddbbbbbbbbbcccccccccccbbbbbbbbd...................
        .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
        .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
        .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
        .............fffccccccccccccccccccccccccccccf...................
        `, SpriteKind.statuedecoration)
    mySprite15.setPosition(147, 44)
    mySprite16 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.mysteriousobject)
    animation.runImageAnimation(
    mySprite16,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . a a f f b a . . . . . 
        . . . . c a b f f c b . . . . . 
        . . . . c b b b a f c b . . . . 
        . . . . c b a c a b b b . . . . 
        . . . . . b b f f a a c . . . . 
        . . . . . . a a b b c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . c a a a c . . . . . . . 
        . . . c c f a b b c . . . . . . 
        . . . b f f b f a a . . . . . . 
        . . . b b a b f f a . . . . . . 
        . . . c b f b b a c . . . . . . 
        . . . . b a f c c . . . . . . . 
        . . . . . b b c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    mySprite16.setPosition(112, 52)
    game.showLongText("Is that another statue?! And what is that thing...?", DialogLayout.Bottom)
    game.showLongText("I donʻt see any more houses around... or people.", DialogLayout.Bottom)
    game.showLongText("This is starting to get weird.", DialogLayout.Bottom)
    game.showLongText("It feels... like a trap, somehow.", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`marin_left_anim`,
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
    assets.animation`myAnim0`,
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporter5, function (sprite, otherSprite) {
    sprites.destroy(mySprite12)
    music.stopAllSounds()
    music.play(music.createSong(hex`005a000408090600001c00010a006400f4016400000400000000000000000000000000050000047a0100000400010c04000800011208000c00010f0c001000011210001400010c14001800011218001c00010f1c002000011220002400010c24002800011428002c0001112c003000011430003400010d34003800011438003c0001113c004000011440004400010c44004800011248004c00010f4c005000011250005400010c54005800011258005c00010f5c006000011260006400010c64006800011468006c0001116c007000011470007400010d74007800011478007c0001117c008000011480008400010d84008800011488008c0001148c009000010d90009400011494009800011498009c00010d9c00a0000116a000a4000116a400a800010da800ac000114ac00b0000114b000b400010db400b8000114b800bc000114bc00c000010dc000c4000116c400c8000116c800cc00010dcc00d0000114d000d4000114d400d800010dd800dc000116dc00e0000116e000e400010de400e8000114e800ec000114ec00f000010df800fc00010dfc000001011600010401011601001c000f05001202c102c20100040500280000006400280003140006020004bc0010001c0001201c002000012220002c00012430003400012734003800012538003c0001243c004000012240004c000120500054000320242754005800031e222558005c00031d20245c00680001228800940001259400980001249800a0000122a400a8000122a800ac000129ac00b0000129b000b4000127b400c0000125c000c4000124cc00d000022427d000d4000125d400e0000125e000e4000127e400e8000120ec00f0000124f000f400022427f4000001012500010401012404001c00100500640000041e000004000000000000000000000000000a040004120000010401012004010801012008010c01012005001c000f0a006400f4010a00000400000000000000000000000000000000020c00f000f80001270c011801012006001c00010a006400f401640000040000000000000000000000000000000002540000000400011d08000c00011d10001400011d18001c00011d20002400011d28002c00011d30003400011d38003c00011d40004400011d58005c00011d60006400011d68006c00011d70007400011d78007c00011d07001c00020a006400f401640000040000000000000000000000000000000003600080008400011d88008c00011d90009400011d98009c00011da000a400011da800ac00011db000b400011db800bc00011dc000c400011dc800cc00011dd000d400011dd800dc00011de000e400011de800ec00011df000f400011df800fc00011d`), music.PlaybackMode.LoopingInBackground)
    mySprite4 = sprites.create(img`
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
        `, SpriteKind.teleporter6)
    mySprite4.setPosition(152, 57)
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888fffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888fffffff888888888888888888888888888888888888888888888888888888888888888888888888888811118888888888888888888888888888888888888888888888888888
        888888888888888888fff1111118888888888888888888888888888888888888888888888888888888888888888888888888888111111888888888888888888888888888888888888888888888888888
        88888888888888ffff8881111118811888888888888888888888888888888888888888888888888888888888888888888888888111111881188888888888888888888888888888888888888888888888
        888888888888ff88881111111118111118888888888888888888888888888888888888888888888888888888888888888888111111111811111888888888888888888888888888888888888888888888
        888888888888f8888111111111111111188888888888888888888888888888888888888888888888888888888888888888811111111111111118888888888888fffff888888888888888888888888888
        8888888888888f88111111111111111111188888888888888888888888888888888888888888888888888888888888888811111111111111111118888888888888888fff888888888888888888888888
        88888888888888ff111111111111111111118888888888888888888888888888888888888888888888888888888888888811111111111111111111888888888888888888ff8888888888888888888888
        8888888888888888ff1111111111111111118881188888888888888888888888888888888888888888888888888888888881111111111111111111888118888888888888fffff8888888888888888888
        888888888888811119ff11111111111111118811111888888888888888888888888888888888888888888888888888811119111111111111111111881fffffffffffffff888888888888888888888888
        88888888888811111191fffff1111111111888111118888888888888888888888888888888888888888888888888881111119111111111111111fffff111188888888888888888888888888888888888
        8888888888881111111111111ffffff1119111111111888888888888888888888888888888888888888888888888881111111111111111111111ffffffffffff88888888888888888888888888888888
        8888888888881111111111111111111fffffff111111888888888888888888888888888888888888888888888888881111111111111111111111111111111188ffffffff888888888888888888888888
        88888888888881111111111111111111fffff111111188888888888888888888888888888888888888888888888888811111111111111111111111111111118888888888ffffff888888888888888888
        8811188881111911111111111111ffff111111111118811888888888888811118888888888888888888811188881111911111111111111111111111111111881188888888888fff11188888888888888
        811111881111111111111111ffff111111111111111811118888888888811111188888888888888888811111881111111111111111111111111111111111181111888fffffff81111118888888888888
        8111118111111111111111ff111111ffffffffffff1811118888888888811111181118888888888888811111811111111111111111111111111111111111fffffffff888888881111118111888888888
        8811111111111111111111ffffffff111111fffff11111118888888888888111111111888888888888881111111111111111111111111111111111ffffff111111888888888888811111111188888888
        81111111111111111111111111111111ffff111111111118888888881111811111111188888888888881111111111111111111111111111111111111ffffffffffffffff881111811111111188888888
        111111111111111111111111111fffff11111111111111118888888111111111111118888888888188111111111bb1111111111111111111111111111111111ffffffff8811111111111111888888888
        111111111111111111111111fff1111111111111111111111811188111111111111111111888888bbb111111111bbb111111111111111111111111111111fff111181118811111111111111111188888
        11111111111111111111111fffff111111111111111111111111111111111111111111111188881bbb111111111bbb11111111111111111111111111111ff11111111111111111111111111111118888
        1111111111111111111111111111ffffffffffff1111111111111111111111111111111111888bbbbbbb111111bbbbb111111111111111111111111111111fffffffff11111111111111111111118888
        11111111111111111111111111111111111111111bbbbbbbbb111111111111111111111111111bbbbbbb111111bbbbb1111111111111111111111111111111111111ff111bbbbbbbbbb1111111111111
        11111111111111111111111111111111111111111bbbbbbbbb111111111111111111111111111bbbbbbb111111bbbbb11111111111111111111111111111111fffff11111bbbbbbbbbb1111111111111
        1111111111111111111bbb1111111111111111111b11bbbbbb111111111111111111111111111b11bbbb11111bbbbbbb11111111111111111111bb111111fff1111111111bb1b1bbbbb1111111111111
        111111111111111111bbbbb111111111111111111bbbbbbb1b111111111111111111111111111bbbbbbb11111bbbbbbb1111111111111111111bbbb111111111111111111bbbbbb11bb1111111111111
        11111111111111111bbbbbb111111111111111111bbbbbbbbb1111111111b11111111bbbbb111b1bbbbb11111bbbbbbb11111111111111111bbbbbb111111111111111111bbbbbbbbbb1111111111111
        11111111111111111bbb1b111111b111111111111bbbbbbbbb111111111bb11111111bbbbb111bbbbbbb11111bbbbbbb11111111111111111bbb1b111111bb11111111111bbbb1bbbbb11111111bb111
        11111111111111111bbbbbb11111b111111111111bbbbbbb1b111111111bb11111111bbbbb111bbbbbbb11111bbbbbbb11111111111111111bbbbbb11111bb11111111111bbbbbbb1bb11111111bb111
        11111111bbb111111bb11b11111bbb11111111111bbbbbbbbb11bbbbbb1bb11111111bbbbb111bbbbbbb11111bbbbbbb111111111bb111111bbb1b11111bbb11111111111bbbbbbbbbb1bbbbbbbbb111
        b1bb1111bbbbbbbbbbb1bbb111bbbbb1111111111bbbbbbb1b11b11bbb1bb111111111bb1bb11bbbbbbb111bbbbbbbbbb1bb1111bbbbbbbbbbbbb1b1111bbbb1111111111bbbbbb11bb1b11bbbbbb111
        bbbb11111b1bb1bbbbbbbbb111bbbbb1111111111bbbbbbbbb11bbbb1b1bb11111111bbbbbb11bb1bbbb111bbbbbbbbbbbbb1111bb1bbb1bbbbbbbb1111bbbb1111111111bbbbbbbbbb1bbbb1bbbb111
        bb1b11111bbb1111bbbbbbb111bbbbb1111111111bbbbbbbbb11bbbb1bbbb11111111bbbbbb11bbbbbbb111bbbbbbbbbbb1b1111bbbb1b11bbbbbbb1111bbbb1111111111bbbbbbbbbb1bbbb1bbbb111
        bbbb1111bbbbbbbbbbbbbbbb11bbbbbb11bb1bb1bbbbbbbbbbb1b11bbbbbb11111111bbbbbb11bbbbbbb111bbbbbbbbbbbbb1111bbbbbbbbbbbbbbbb11bbbbbb111b11bbbbbbbbbbbbb1b11bbbbbb111
        bb1b1111bbbbbbbbbbbbbbbb11bbbbbb11bbbbbbbbbbbbbbbbb1bbbbbbbbb11b11b11bbbbbb11bbbbbbb111bbbbbbbbbbb1b1111bbbbbbbbbbbbbbbb11bbbbbb111bbbbbbbbbbbbbbbb1bbbbbbbbb111
        bbbbb1bb1b1bbbbbbbbbbbbb11bbbbbbb1bbbb11bbbbbbbbbbbbb11ccbbbbbbb1bbb11bb1bb11bbbbbbb111bbbbbbbbbbbbbbb1bbb1bbbbbbbbbbbbb11bbbbbbb111b11bbbbbbcbbbbbbb11cccbbb1bb
        bbbbb1bbbbbbbbbbbbbbbbbbbb1bbbbbb1bbbbbbbbbcccbbbbbbbbbcccbbbbbb1bbb1bbbbbb11bbbbbbb111bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbccbbbbbbbbbcccbbb1bb
        bbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbcccbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbccbbbbbbbbbcccbbbbbb
        bbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbcccccccbbbbbcccccbbbbb
        bbbbbcccccccccbbbbbbbbbbbbbbbbbbb1bbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbb1bbbbbbbbcccccccbbbbbcccccbbbbb
        bbbbbcccccccccbbbbbbbbbbbbbbbbbbb1bbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbb1bbbbbbbbcccccccbbbbbcccccbbbbb
        bbbbbcddccccccbbbbbbbbbbbbbbbbbbb1bbbbbbbcddccccbbbbbcccccccbb111bbbbbbbbbbbbbbbccbbbb1bbbbbbbbbbbbbbccdcdcccccbbbbbbbbbbbbbbbbbb1bbbbbbbbcccccccbbbbcccccccc11b
        bbbbbcccccccdcbbbbbbbbbbbbbbbbbbb1bbbbbbbcccccccbbbbbcccccccbbb11bbbbbbbbbbbbbbccccbbb1bbbbbbbbbbbbbbccccccddccbbbbbbbbbbbbbbbbbb1bbbbbbbbcccccccbbbbccccccccbbb
        bbbbbcccccccccbbbbbbbbbbcbbbbbbbbcccccbbbcdcccccbbbbbcccccccbbbbbbbbbbb1bbbbbccccccbbb1bbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbccccbbbbcccdcccbbbbccccccccbbb
        bbbbbcccccccccbbbbbbbbbccbbbbbbbbcccccbbbcccccccbbbbbcccccccbb1bbbbbbbbbbbbbbcccdcbbbbbbccbbbbbbbbbbbccccdcccccbbbbbbbbccbbbbbbbbbccccbbbbcccdcccbbbbccccccccb1b
        bbbbbcccccccdcbbbbbbbbbccbbbbbbbbcccccbbbcccccccbbbbbcccccccbb111bbbbbbbbbbbbccccccbbbbbccbbbbbbbbbbbcccccccdccbbbbbbbbccbbbbbbbbccccccbbbcccccccbbbbcccccccc11b
        bbbbbcccccccccbbccccccbccbbbbbbbbcccccbbbcccccccbbbbbcccccccbbbbbbbbbcc1bbbbbcccdcbbbbbcccbbbbbbbbbbbccccccccccbcccccccccbbbbbbbbccccccbbbcccdcccbbbbccccccccbbb
        bbbbbcccccccdcbbcddcccbccbbbbbbbbbccdccbbcccccccbbbccccccccccbccbbbbcccccccccccccdcbbbbccccbbbbbbbbbbccccccddccbcddccccccbbbbbbbbcccccccbbcccccccbbccccccccccccc
        bbbbbcccccccccbbccccdcbccbbbbbbbbccccccbbccdccccbbbcccccccccccccbbbbccdcccdccccccccbbbbccccbbbbbbbbbbccccccccccbccccdccccbbbbbbbbcccccccbbccccdccbbccccccccccccc
        bbbbbcccccccccbbccccdccccbbbbbbbbccccccbbcccccccbbbcccccccccccdcbbbbccccdcddcccccccbbbbccccbbbbbbbbbbccccccccccbccccdccccbbbbbbbbcccccccbbcccccccbbccccccccccccc
        bccbcccccccccccbcddccccccbbbbbbbbccccccbbcccccccbbbcccccccccccccbbbbccccccccccccccccbbccccccbbbcbbcccccccccccccbcddccccccbbbbbbbbcccccccbbcccccccbbccccccccccccc
        cccccccccccccccbcccccccccbbcbbcbbccccccbbcccccccbbbcccccccccccdcbbbbccccccccccccccccbbccccccbbbccccccccccccccccbcccccccccbbbbbcbbcccccccbbcccccccbbccccccccccccc
        ccddcccccccccccccddddcccccccbcccbbccdccbbcccccccbbbcccccccccccccccbcccdcccccccccccccbbcccccccbbbcddccccccccccccccddcdccccbccbcccbcccccccbbcccccccbbccccccccccccc
        ccccccccccccccccccccccccccccbcccbccccccbbcccccccbbbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccbccbcccccccccccbbccccdccbbccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbcdccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccdcccccccccccccccccccbccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccc
        ccccccccccccccccccccccccccdddcccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccddcccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccdccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccfccccccccccccccccfccccccccccccccccccccccfccccccccccccccccfccccccccccccccccccccccfccccccccccccccccfccccccccccccccccccccccfccccccccccccccccfccccc
        ccccccfcccffcccccffccccfcccfccccfcffcccfccccccfcccffcccccffccccfcccfccccfcffcccfccccccfcccffcccccffccccfcccfccccfcffcccfccccccfcccffcccccffccccfcccfccccfcffcccf
        ccfcccffcffccfcccffcccffcccffcccfccffcffccfcccffcffccfcccffcccffcccffcccfccffcffccfcccffcffccfcccffcccffcccffcccfccffcffccfcccffcffccfcccffcccffcccffcccfccffcff
        ccffccffcffccffcccffcffccccffcfcffcffffcccffccffcffccffcccffcffccccffcfcffcffffcccffccffcffccffcccffcffccccffcfcffcffffcccffccffcffccffcccffcffccccffcfcffcffffb
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
    mySprite.setPosition(3, 52)
    mySprite14 = sprites.create(assets.image`npc_1`, SpriteKind.npc)
    mySprite14.setPosition(75, 61)
    animation.runImageAnimation(
    mySprite14,
    assets.animation`npc_1_anim`,
    450,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`marin_right_anim`,
    100,
    true
    )
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
    mySprite6.setPosition(151, 66)
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
    mySprite.setPosition(0, 70)
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
    mySprite7 = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite7,
    assets.animation`enemy1_anim`,
    200,
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
    mySprite.setPosition(18, 70)
    sprites.destroy(mySprite3)
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
    assets.animation`Coin3`,
    500,
    true
    )
    mySprite5.setPosition(77, 63)
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
    mySprite.setPosition(9, 70)
    mySprite11 = sprites.create(img`
        ................................................................
        ................................................................
        ............................dddddd..............................
        ..........................ddbbbbbb..............................
        ..........................ddbbbbbb..............................
        ..........................ddbbbbbb..............................
        ..........................ddbddddd..............................
        ..........................bbdddddd..............................
        ..........................bbdddddd..............................
        ..........................bbdddddd..............................
        ..........................bbcdddbbdd............................
        ..........................ccbcccbbddd...........................
        ..........................ccbcccbbddd...........................
        ..........................ccbcccbbddd...........................
        ..........................bbdbbbddbbd...........................
        ..........................bbdbbbddbbd...........................
        .........................cbbdbbbddccd...........................
        .........................cbbdbbbddccd...........................
        .........................cbbbbbbddddb...........................
        .........................cbbbbbbddddb...........................
        .........................cffbdddbbddd...........................
        .........................cffbdddbbddd...........................
        ......................bbbcffbdddddbbd...........................
        ......................bbbcffbdddddbbd...........................
        ......................bbbcffdddddddd............................
        ......................bbbcffdddddddd............................
        ......................bbbfbbdddddddd............................
        ....................bbbbbfddddddddddb...........................
        ....................bbbbbfddddddddddb...........................
        ....................bbbbbfddddddddddb...........................
        ....................ddcccbddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bddddddddddd...........................
        .........................bdddbbbddddd...........................
        .........................bdddbbbdddddbb.........................
        .........................bdddbbbdddddbb.........................
        .........................bdddbbbdddddbb.........................
        ................cccccccccbdddbbbdddddddccccc....................
        .............cccddddddbbbbddbbbbdddddddbbbddc...................
        .............cccddddddbbbbddbbbbdddddddbbbddc...................
        .............cccddddddbbbbddbbbbdddddddbbbddc...................
        .............bbbddddbbdddbddbbbbddddbddbbbddb...................
        .............bbbddddbbddddddbbbbddddbbbbbbddb...................
        .............bbbddddbbddddddbbbbddddbbbbbbddb...................
        .............bbbddddddbbbdddbbbbddddbbbdddddb...................
        .............bbbddddddbbbdddbbbbddddbbbdddddb...................
        .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
        .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
        .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
        .............bbbddddddddddbbbbbbbbbbddddddddb...................
        .............bbbddddddddddbbbbbbbbbbddddddddb...................
        .............cccddddddddddddddddddddddddddddc...................
        .............cccddddddddddddddddddddddddddddc...................
        .............bbbccccdddddddddddddddddddcccccb...................
        .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
        .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
        .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
        .............dddbbbbbbbbbcccccccccccbbbbbbbbd...................
        .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
        .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
        .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
        .............fffccccccccccccccccccccccccccccf...................
        `, SpriteKind.statue2)
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
let mySprite8: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite7: Sprite = null
let mySprite10: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite12: Sprite = null
let mySprite9: Sprite = null
let mySprite16: Sprite = null
let mySprite15: Sprite = null
let projectile: Sprite = null
let mySprite13: Sprite = null
let mySprite4: Sprite = null
let mySprite14: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Dark_woods`)
music.play(music.createSong(hex`005a0004080a0600001c00010a006400f4016400000400000000000000000000000000050000049c0038003c0001123c004000011440004c00011b4c005400012754005c0001275c006000012560006400012580008400012584008800012488009000012490009800012098009c0001259c00a8000124c000c800011ec800cc000127cc00d8000125e800f000011df000f4000124f4000001012204010801012008010c0101200c011001012010011401012014011c01011e1c012001012220012801011902001c000c960064006d019001000478002c010000640032000000000a06000507003401380102112403001c0001dc00690000045e010004000000000000000000000564000104000307003001340102112404001c00100500640000041e000004000000000000000000000000000a040004070028012c0102112405001c000f0a006400f4010a000004000000000000000000000000000000000207002c01300102112409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800e400000001000112080009000112100011000112180019000112200021000112280029000112300031000112380039000112400041000112480049000112500051000113580059000113600061000112680069000112700071000112780079000112800081000112880089000112900091000112980099000112a000a1000112a800a9000112b000b1000112b800b9000112c000c1000112c800c9000112d000d1000112d800d9000112e000e1000112e800e9000112f000f1000112f800f9000112000101010112080109010112100111010112180119010112200121010112280129010112`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`Myranda`, SpriteKind.Player)
mySprite.setPosition(17, 70)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim0`,
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
    ................................................................
    ................................................................
    ............................dddddd..............................
    ..........................ddbbbbbb..............................
    ..........................ddbbbbbb..............................
    ..........................ddbbbbbb..............................
    ..........................ddbddddd..............................
    ..........................bbdddddd..............................
    ..........................bbdddddd..............................
    ..........................bbdddddd..............................
    ..........................bbcdddbbdd............................
    ..........................ccbcccbbddd...........................
    ..........................ccbcccbbddd...........................
    ..........................ccbcccbbddd...........................
    ..........................bbdbbbddbbd...........................
    ..........................bbdbbbddbbd...........................
    .........................cbbdbbbddccd...........................
    .........................cbbdbbbddccd...........................
    .........................cbbbbbbddddb...........................
    .........................cbbbbbbddddb...........................
    .........................cffbdddbbddd...........................
    .........................cffbdddbbddd...........................
    ......................bbbcffbdddddbbd...........................
    ......................bbbcffbdddddbbd...........................
    ......................bbbcffdddddddd............................
    ......................bbbcffdddddddd............................
    ......................bbbfbbdddddddd............................
    ....................bbbbbfddddddddddb...........................
    ....................bbbbbfddddddddddb...........................
    ....................bbbbbfddddddddddb...........................
    ....................ddcccbddddddddddd...........................
    .........................bddddddddddd...........................
    .........................bddddddddddd...........................
    .........................bddddddddddd...........................
    .........................bddddddddddd...........................
    .........................bdddbbbddddd...........................
    .........................bdddbbbdddddbb.........................
    .........................bdddbbbdddddbb.........................
    .........................bdddbbbdddddbb.........................
    ................cccccccccbdddbbbdddddddccccc....................
    .............cccddddddbbbbddbbbbdddddddbbbddc...................
    .............cccddddddbbbbddbbbbdddddddbbbddc...................
    .............cccddddddbbbbddbbbbdddddddbbbddc...................
    .............bbbddddbbdddbddbbbbddddbddbbbddb...................
    .............bbbddddbbddddddbbbbddddbbbbbbddb...................
    .............bbbddddbbddddddbbbbddddbbbbbbddb...................
    .............bbbddddddbbbdddbbbbddddbbbdddddb...................
    .............bbbddddddbbbdddbbbbddddbbbdddddb...................
    .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
    .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
    .............bbbdddddddddbbbbbbbbbbbbbbdddddb...................
    .............bbbddddddddddbbbbbbbbbbddddddddb...................
    .............bbbddddddddddbbbbbbbbbbddddddddb...................
    .............cccddddddddddddddddddddddddddddc...................
    .............cccddddddddddddddddddddddddddddc...................
    .............bbbccccdddddddddddddddddddcccccb...................
    .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
    .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
    .............dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbd...................
    .............dddbbbbbbbbbcccccccccccbbbbbbbbd...................
    .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
    .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
    .............cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...................
    .............fffccccccccccccccccccccccccccccf...................
    `, SpriteKind.statue)
mySprite2.setPosition(77, 60)
game.showLongText("It worked!!!", DialogLayout.Bottom)
game.showLongText("I'm in another world... Wow!!!", DialogLayout.Bottom)
game.showLongText("This is so cool!", DialogLayout.Bottom)
mySprite.sayText("...", 1000, false)
