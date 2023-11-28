// Conversor de mesura C-F
//  Fet per Roman Aziz
let my_sprite = sprites.create(img`
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
`, SpriteKind.Player)
function menu(): number {
    game.showLongText("Si vols pasar de ºC a ºF prem 1, si vols pasar de ºF a ºC prem 2", DialogLayout.Bottom)
    let opcio_usuari = game.askForNumber("Escull la teva opcio", 1)
    return opcio_usuari
}

function salutacio() {
    let opcio = menu()
    if (opcio == 1) {
        c_to_f()
        salutacio()
    } else if (opcio == 2) {
        //  Llamamos a salutacio nuevamente después de la conversión
        f_to_c()
        salutacio()
    } else {
        game.showLongText("opcio no valida", DialogLayout.Bottom)
        salutacio()
    }
    
}

function c_to_f() {
    let opcio_usuari_c = game.askForNumber("Escull la temperatura per pasar de ºC a ºF")
    let resultat_f = Math.round(opcio_usuari_c * 9 / 5 + 32)
    game.showLongText("La respodta es " + resultat_f + "ºF", DialogLayout.Bottom)
}

function f_to_c() {
    let opcio_usuari_f = game.askForNumber("Escull la temperatura per pasar de ºF a ºC")
    let resultat_c = Math.round((opcio_usuari_f - 32) * 5 / 9)
    game.showLongText("La resposta es " + resultat_c + "ºC", DialogLayout.Bottom)
}

salutacio()
