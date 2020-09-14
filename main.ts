/** 
Title: Froggy
Creater: Me
Description: Flappy bird clone with a frog

 */
//  Setup
info.setLife(3)
info.setScore(0)
game.splash("Froggy", "Press A to Begin")
//  TODO--Create background
//  TODO--Explore effects
//  Create Froggy
let froggy = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
froggy.x = 40
froggy.ay = 150
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_jump() {
    froggy.vy = -100
})
game.onUpdate(function on_update() {
    let y = froggy.y
    if (y > scene.screenHeight()) {
        death()
    } else if (y < 0) {
        froggy.y = 0
    }
    
})
function death() {
    info.changeLifeBy(-1)
    froggy.y = scene.screenHeight() / 2
    froggy.vy = 0
    if (info.life() > 0) {
        game.splash("Press A to Restart")
    }
    
}

//  Create trees
game.onUpdateInterval(1500, function create_trees() {
    let tree_img = image.create(10, scene.screenHeight())
    tree_img.fill(14)
    tree_img.fillRect(0, randint(20, 50), 10, randint(40, 60), 0)
    let tree = sprites.createProjectileFromSide(tree_img, -50, 0)
    tree.y = scene.screenHeight() / 2
})
