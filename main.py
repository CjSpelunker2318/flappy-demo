"""
Title: Froggy
Creater: Me
Description: Flappy bird clone with a frog
"""
# Setup
info.set_life(3)
info.set_score(0)
game.splash("Froggy", "Press A to Begin")
# TODO--Create background
# TODO--Explore effects

# Create Froggy
froggy = sprites.create(img("""
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
"""))
froggy.x = 40
froggy.ay = 150

def on_jump():
    froggy.vy = -100
controller.A.on_event(ControllerButtonEvent.PRESSED, on_jump)

def on_update():
    y = froggy.y
    if y > scene.screen_height():
        death()
    elif y < 0:
        froggy.y = 0
game.on_update(on_update)

def death():
    info.change_life_by(-1)
    froggy.y = scene.screen_height()/2
    froggy.vy = 0
    if info.life() > 0:
        game.splash("Press A to Restart")

# Create trees
def create_trees():
    tree_img = image.create(10, scene.screen_height())
    tree_img.fill(14)
    tree_img.fill_rect(0,randint(20,50),10,randint(40,60),0)
    tree = sprites.create_projectile_from_side(tree_img, -50, 0)
    tree.y = scene.screen_height()/2
game.on_update_interval(1500, create_trees)


# Hit Trees