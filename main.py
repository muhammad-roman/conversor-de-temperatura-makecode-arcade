#Conversor de mesura C-F
# Fet per Roman Aziz

my_sprite = sprites.create(img("""
ffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffcebbbbeffffffffffffffffffffffffffff
ffffffffffcbddddd3efffffffffffffffffffffffffff
fffffffffeddddddddbeffffffffffffffffffffffffff
ffffffffebddddddddbbcfffffffffffffffffffffffff
fffffffebddddddddd3befffffffffffffffffffffffff
fffffffbdddddddd3dbebfffffffffffffffffffffffff
fffffffebbddddddddbceeffffffffffffffffffffffff
fffffffcbbdddddddbbcfbffffffffffffffffffffffff
fffffffcb3dddddddbcc8bcfffffffffffffffffffffff
ffffffffcbdddddddbff8befffffffffffffffffffffff
ffffffcccbddddddddcccbbfffffffffffffffffffffff
ffffffeecbddddddddbbbbbfffffffffffffffffffffff
ffffffeddddddddddddbbbbffffffffffffffeffffffff
ffffffebbdddddddd3bbebbffffffffffffffeeeffffff
ffffffebbbbbdbbbbbccbbcfffffffffffffc44effffff
fffffffebbceebbbbbcebefffffffffffffee44effffff
ffffffffcbbcbbbddbebbffffffffffffff4444effffff
ffffffffffeeebbbbebbbffffffffffffff4444eefffff
ffffffffffffebeebbbbbbbcfffffffffff44444eeffff
ffffffffffcbbbbeebbbbdddbffffffffff444444effff
fffffffeebddbbbddbbbddddddbbbcffff44444ddeffff
ffffcbbbddddbdddddbbddddddddbbbefed4444dbeffff
fffeb3ddddddbddddddbdddddddbbbbcf4ddd4dd44ffff
ffffcbdddddbdddddddddddddddbebcffed5ddd444ffff
fffffebbbbbbddddddddbbbbbbbbcfffffe4ddd4efffff
fffffcfffffbdddddddddbbbcffffffffff4dd44efffff
fffffffffffd11ddddddddddbffffffffffebbeeefffff
fffffffffffd11dddddddddddbffffffffffebefffffff
ffffffffffcd11ddddddddbddbefffffffffebefffffff
ffffffffffcd111dddddddddddbefffffffcebefffffff
ffffffffffebd1111ddddddddddcfffffffebecfffffff
ffffffffebdbddddddddddbddddbfffffcebbeffffffff
ffffffffbdddbddddddddbddddddeeeeeebbbcffffffff
fffffffcddddbddddddddbddddddbebbbbbbcfffffffff
fffffffebddbbbdddddddbdddddbbebbbbbcffffffffff
fffffffebdbbbbbbdddddbddddbbbebebbcfffffffffff
fffffffebbbbbbbbbbbdddbbbbbbbebbbbcfffffffffff
fffffffcbbbbbbbeecccbbebbbbbbeccccffffffffffff
ffffffcbebbbbbeffffffffebbbbbbffffffffffffffff
fffffcbbbbbbebefffffffffbbbbbbcfffffffffffffff
fffffcbdbbceecffffffffffcbbbbbbcffffffffffffff
ffffffcccffffffffffffffffebdbdcfffffffffffffff
ffffffffffffffffffffffffffcbcccfffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffff
"""), SpriteKind.player)

def menu():
    game.show_long_text("Si vols pasar de ºC a ºF prem 1, si vols pasar de ºF a ºC prem 2", DialogLayout.BOTTOM)
    opcio_usuari = game.ask_for_number("Escull la teva opcio" ,1)
    return opcio_usuari

def salutacio():
    opcio = menu()
    if opcio == 1:
        c_to_f()
        salutacio()  # Llamamos a salutacio nuevamente después de la conversión
    elif opcio == 2:
        f_to_c()
        salutacio() 
    else:
        game.show_long_text("opcio no valida", DialogLayout.BOTTOM)
        salutacio()  

def c_to_f():
    opcio_usuari_c = game.ask_for_number("Escull la temperatura per pasar de ºC a ºF")
    resultat_f = Math.round((opcio_usuari_c * 9/5) + 32)
    game.show_long_text("La respodta es " + resultat_f +"ºF", DialogLayout.BOTTOM)

def f_to_c():
    opcio_usuari_f = game.ask_for_number("Escull la temperatura per pasar de ºF a ºC")
    resultat_c = Math.round((opcio_usuari_f - 32) * 5/9)
    game.show_long_text("La resposta es " + resultat_c + "ºC", DialogLayout.BOTTOM)

salutacio()
