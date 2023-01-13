var buttons = document.getElementsByTagName('button')

var modal = document.getElementById('modal')
var vencedor = document.getElementById('vencedor')
var restart = document.getElementById('restart')

var circle_vez = document.getElementById('vez_circle')
var cross_vez = document.getElementById('vez_cross')

var jogo = [[ , , ,], [ , , ,], [ , , ,]]
var fim = false

var vez = undefined
mudarVez()

jogar()

function jogar(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(fim == false){
                renderizar(i, vez)
                if(fim == false){
                    mudarVez()
                }
            }
        })
        
    }
}

function renderizar(index, vez){
    switch (index) {
        case 0:
            if(jogo[0][0] == undefined){
                jogo[0][0] = vez
            }
            break;

        case 1:
            if(jogo[0][1] == undefined){
                jogo[0][1] = vez
            }
            break;

        case 2:
            if(jogo[0][2] == undefined){
                jogo[0][2] = vez
            }
            break;

        case 3:
            if(jogo[1][0] == undefined){
                jogo[1][0] = vez
            }
            break;

        case 4:
            if(jogo[1][1] == undefined){
                jogo[1][1] = vez
            }
            break;

        case 5:
            if(jogo[1][2] == undefined){
                jogo[1][2] = vez
            }
            break;

        case 6:
            if(jogo[2][0] == undefined){
                jogo[2][0] = vez
            }
            break;

        case 7:
            if(jogo[2][1] == undefined){
                jogo[2][1] = vez
            }
            break;

        case 8:
            if(jogo[2][2] == undefined){
                jogo[2][2] = vez
            }
            break;

        default:
            break;
    }

    console.clear()
    
    for(let i = 0; i < jogo.length; i++){
        for(let index = 0; index < jogo[i].length; index++){
            if(i == 0){
                if(jogo[i][index] == 0){
                    buttons[index].style.backgroundImage = 'url(images/circle.png)'
                } else if(jogo[i][index] == 1){
                    buttons[index].style.backgroundImage = 'url(images/cross.png)'
                }
            } else if(i == 1){
                if(jogo[i][index] == 0){
                    buttons[index + 3].style.backgroundImage = 'url(images/circle.png)'
                } else if(jogo[i][index] == 1){
                    buttons[index + 3].style.backgroundImage = 'url(images/cross.png)'
                }
            } else if(i == 2){
                if(jogo[i][index] == 0){
                    buttons[index + 6].style.backgroundImage = 'url(images/circle.png)'
                } else if(jogo[i][index] == 1){
                    buttons[index + 6].style.backgroundImage = 'url(images/cross.png)'
                }
            }
        }
    }

    verificarJogo(jogo)
}

function mudarVez(){
    if(vez == undefined){
        vez = parseInt(Math.random()*2)
    } else if(vez == 0){
        vez = 1
    } else if(vez == 1){
        vez = 0
    }

    if (vez == 0) {
        circle_vez.style.color = 'white'
        cross_vez.style.color = 'rgba(255, 255, 255, 0.096)'
    } else if(vez == 1){
        circle_vez.style.color = 'rgba(255, 255, 255, 0.096)'
        cross_vez.style.color = 'white'
    }
}

function verificarLinha(array){
    let result = undefined
    let position = undefined

    let linha1 = undefined
    let linha2 = undefined
    let linha3 = undefined

    for (let linha = 0; linha < array.length; linha++) {
        for(let coluna = 0; coluna < array[linha].length; coluna++){
            if(linha == 0){
                if(array[linha][coluna] != undefined){
                    if(coluna == 0){
                        if(linha1 == undefined){
                            linha1 = array[linha][coluna]
                        } else{
                            if(linha1 == array[linha][coluna]){
                                linha1 = array[linha][coluna]
                            } else{
                                linha1 = undefined
                            }
                        }   
                    } else{
                        if(linha1 != undefined){
                            if(array[linha][coluna] == linha1){
                                linha1 = array[linha][coluna]
                            } else{
                                linha1 = undefined
                            }
                        } else{
                            linha1 = undefined
                        }
                    }
                } else{
                    linha1 = undefined
                }
            } else if(linha == 1){
                if(array[linha][coluna] != undefined){
                    if(coluna == 0){
                        if(linha2 == undefined){
                            linha2 = array[linha][coluna]
                        } else{
                            if(linha2 == array[linha][coluna]){
                                linha2 = array[linha][coluna]
                            } else{
                                linha2 = undefined
                            }
                        }   
                    } else{
                        if(linha2 != undefined){
                            if(array[linha][coluna] == linha2){
                                linha2 = array[linha][coluna]
                            } else{
                                linha2 = undefined
                            }
                        } else{
                            linha2 = undefined
                        }
                    }
                } else{
                    linha2 = undefined
                }
            } else if(linha == 2){
                if(array[linha][coluna] != undefined){
                    if(coluna == 0){
                        if(linha3 == undefined){
                            linha3 = array[linha][coluna]
                        } else{
                            if(linha3 == array[linha][coluna]){
                                linha3 = array[linha][coluna]
                            } else{
                                linha3 = undefined
                            }
                        }   
                    } else{
                        if(linha3 != undefined){
                            if(array[linha][coluna] == linha3){
                                linha3 = array[linha][coluna]
                            } else{
                                linha3 = undefined
                            }
                        } else{
                            linha3 = undefined
                        }
                    }
                } else{
                    linha3 = undefined
                }
            }
        }

    }

    if(linha1 == undefined && linha2 == undefined && linha3 == undefined){
        result = false
        position = undefined
    } else{
        if(linha1 != undefined){
            result = true
            position = 0
        } else if(linha2 != undefined){
            result = true
            position = 1
        } else if(linha3 != undefined){
            result = true
            position = 2
        }
    }

    return [result, position]
}

function verificarColuna(array){
    let result = undefined
    let position = undefined

    let coluna1 = undefined
    let coluna2 = undefined
    let coluna3 = undefined

    for(let i = 0; i < array.length; i++){
        if(array[i][0] != undefined){
            if(i < 1){
                if(coluna1 == undefined){
                    coluna1 = array[i][0]
                } else{
                    if(coluna1 == array[i][0]){
                        coluna1 = array[i][0]
                    } else{
                        coluna1 = undefined
                    }
                }
            } else{
                if(coluna1 == undefined){
                    coluna1 = undefined
                } else{
                    if(coluna1 == array[i][0]){
                        coluna1 = array[i][0]
                    } else{
                        coluna1 = undefined
                    }
                }
            }
        } else{ 
            coluna1 = undefined
        }
    }

    if(coluna1 != undefined){
        result = true
        position = 0
    }

    for(let i = 0; i < array.length; i++){
        if(array[i][1] != undefined){
            if(i < 1){
                if(coluna2 == undefined){
                    coluna2 = array[i][1]
                } else{
                    if(coluna2 == array[i][1]){
                        coluna2 = array[i][1]
                    } else{
                        coluna2 = undefined
                    }
                }
            } else{
                if(coluna2 == undefined){
                    coluna2 = undefined
                } else{
                    if(coluna2 == array[i][1]){
                        coluna2 = array[i][1]
                    } else{
                        coluna2 = undefined
                    }
                }
            }
        } else{ 
            coluna2 = undefined
        }
    }

    if(coluna2 != undefined){
        result = true
        position = 1
    }

    for(let i = 0; i < array.length; i++){
        if(array[i][2] != undefined){
            if(i < 1){
                if(coluna3 == undefined){
                    coluna3 = array[i][2]
                } else{
                    if(coluna3 == array[i][2]){
                        coluna3 = array[i][2]
                    } else{
                        coluna3 = undefined
                    }
                }
            } else{
                if(coluna3 == undefined){
                    coluna3 = undefined
                } else{
                    if(coluna3 == array[i][2]){
                        coluna3 = array[i][2]
                    } else{
                        coluna3 = undefined
                    }
                }
            }
        } else{ 
            coluna3 = undefined
        }
    }

    if(coluna3 != undefined){
        result = true
        position = 2
    }

    return [result, position]

}

function verificarDiagonal(array){
    let result = undefined
    let position = undefined

    let diagonal1 = undefined
    let diagonal2 = undefined

    let coluna = 2

    for(let i = 0; i < array.length; i++){
        if(array[i][i] != undefined){
            if(i < 1){
                if(diagonal1 == undefined){
                    diagonal1 = array[i][i]
                } else{
                    if(diagonal1 == array[i][i]){
                        diagonal1 = array[i][i]
                    } else{
                        diagonal1 = undefined
                    }
                } 
            } else{
                if(diagonal1 == undefined){
                    diagonal1 = undefined
                } else{
                    if(diagonal1 == array[i][i]){
                        diagonal1 = array[i][i]
                    } else{
                        diagonal1 = undefined
                    }
                }
            }
        } else{
            diagonal1 = undefined
        }   
    }


    if(diagonal1 == undefined){
        result = false
        position = undefined
    } else{
        result = true
        position = 0
    }

    for(let linha = 0; linha < array.length; linha++){
        if(array[linha][coluna] != undefined){
            if(linha == 0){
                diagonal2 = array[linha][coluna]
            } else{
                if(diagonal2 == undefined){
                    diagonal2 = undefined
                } else{
                    if(diagonal2 == array[linha][coluna]){
                        diagonal2 == array[linha][coluna]
                    } else{
                        diagonal2 = undefined
                    }
                }
            }
        } else{ 
            diagonal2 = undefined
        }

        coluna--
    }

    if(diagonal1 == undefined && diagonal2 == undefined){
        result = false
        position = undefined
    } else{
        if(diagonal1 != undefined){
            result = true
            position = 0
        } else if(diagonal2 != undefined){
            result = true
            position = 1
        }
    }

    return [result, position]
    
}

function verificarVelha(array){
    let result = false

    for(let linha = 0; linha < array.length; linha++){
        for(let coluna = 0; coluna < array[linha].length; coluna++){
            if(array[linha][coluna] != undefined){
                result = true
            } else{
                result = false
                break
            }
        }

        if(result == false){
            break
        }
    }

    return result
}

function verificarJogo(array){
    let position = undefined
    
    if(verificarLinha(array)[0] == true){
        position = verificarLinha(array)[1]

        if(position != undefined){
            switch (position) {
                case 0:
                    for(let i = 0; i < buttons.length; i++){
                        buttons[i].style.backgroundImage = 'none'
                    }

                    if(vez == 0){
                        buttons[0].style.backgroundImage = 'url(images/circle.png)'
                        buttons[1].style.backgroundImage = 'url(images/circle.png)'
                        buttons[2].style.backgroundImage = 'url(images/circle.png)'
                    } else if(vez == 1){
                        buttons[0].style.backgroundImage = 'url(images/cross.png)'
                        buttons[1].style.backgroundImage = 'url(images/cross.png)'
                        buttons[2].style.backgroundImage = 'url(images/cross.png)'
                    }
                    break;
    
                case 1:
                    for(let i = 0; i < buttons.length; i++){
                        buttons[i].style.backgroundImage = 'none'
                    }

                    if(vez == 0){
                        buttons[3].style.backgroundImage = 'url(images/circle.png)'
                        buttons[4].style.backgroundImage = 'url(images/circle.png)'
                        buttons[5].style.backgroundImage = 'url(images/circle.png)'
                    } else if(vez == 1){
                        buttons[3].style.backgroundImage = 'url(images/cross.png)'
                        buttons[4].style.backgroundImage = 'url(images/cross.png)'
                        buttons[5].style.backgroundImage = 'url(images/cross.png)'
                    }
                    break;
    
                case 2:
                    for(let i = 0; i < buttons.length; i++){
                        buttons[i].style.backgroundImage = 'none'
                    }

                    if(vez == 0){
                        buttons[6].style.backgroundImage = 'url(images/circle.png)'
                        buttons[7].style.backgroundImage = 'url(images/circle.png)'
                        buttons[8].style.backgroundImage = 'url(images/circle.png)'
                    } else if(vez == 1){
                        buttons[6].style.backgroundImage = 'url(images/cross.png)'
                        buttons[7].style.backgroundImage = 'url(images/cross.png)'
                        buttons[8].style.backgroundImage = 'url(images/cross.png)'
                    }
                    break;
            
                default:
                    break;
            }
        }

        finalizarJogo()

    } else if(verificarDiagonal(array)[0] == true){
        position = verificarDiagonal(array)[1]
        console.log(verificarDiagonal(array)[1])

        if(position == 0){
            for(let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundImage = 'none'
            }

            if(vez == 0){
                buttons[0].style.backgroundImage = 'url(images/circle.png)'
                buttons[4].style.backgroundImage = 'url(images/circle.png)'
                buttons[8].style.backgroundImage = 'url(images/circle.png)'
            } else if(vez == 1){
                buttons[0].style.backgroundImage = 'url(images/cross.png)'
                buttons[4].style.backgroundImage = 'url(images/cross.png)'
                buttons[8].style.backgroundImage = 'url(images/cross.png)'
            }
        } else if(position = 1){
            for(let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundImage = 'none'
            }

            if(vez == 0){
                buttons[2].style.backgroundImage = 'url(images/circle.png)'
                buttons[4].style.backgroundImage = 'url(images/circle.png)'
                buttons[6].style.backgroundImage = 'url(images/circle.png)'
            } else if(vez == 1){
                buttons[2].style.backgroundImage = 'url(images/cross.png)'
                buttons[4].style.backgroundImage = 'url(images/cross.png)'
                buttons[6].style.backgroundImage = 'url(images/cross.png)'
            }
        }

        finalizarJogo() 

    } else if(verificarColuna(array)[0] == true){
        position = verificarColuna(array)[1]

        console.log(position)

        if(position == 0){
            for(let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundImage = 'none'
            }

            if(vez == 0){
                buttons[0].style.backgroundImage = 'url(images/circle.png)'
                buttons[3].style.backgroundImage = 'url(images/circle.png)'
                buttons[6].style.backgroundImage = 'url(images/circle.png)'
            } else if(vez == 1){
                buttons[0].style.backgroundImage = 'url(images/cross.png)'
                buttons[3].style.backgroundImage = 'url(images/cross.png)'
                buttons[6].style.backgroundImage = 'url(images/cross.png)'
            }
        } else if(position == 1){
            for(let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundImage = 'none'
            }

            if(vez == 0){
                buttons[1].style.backgroundImage = 'url(images/circle.png)'
                buttons[4].style.backgroundImage = 'url(images/circle.png)'
                buttons[7].style.backgroundImage = 'url(images/circle.png)'
            } else if(vez == 1){
                buttons[1].style.backgroundImage = 'url(images/cross.png)'
                buttons[4].style.backgroundImage = 'url(images/cross.png)'
                buttons[7].style.backgroundImage = 'url(images/cross.png)'
            }
        } else if(position == 2){
            for(let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundImage = 'none'
            }

            if(vez == 0){
                buttons[2].style.backgroundImage = 'url(images/circle.png)'
                buttons[5].style.backgroundImage = 'url(images/circle.png)'
                buttons[8].style.backgroundImage = 'url(images/circle.png)'
            } else if(vez == 1){
                buttons[2].style.backgroundImage = 'url(images/cross.png)'
                buttons[5].style.backgroundImage = 'url(images/cross.png)'
                buttons[8].style.backgroundImage = 'url(images/cross.png)'
            }
        }

        finalizarJogo()

    } else if(verificarVelha(array) == true){
        finalizarJogo()    
    }
    
}

function finalizarJogo(){
    console.log('jogo finalizado')
    fim = true
    modal.style.opacity = '1'
    modal.style.display = 'block'
    if(vez == 0){
        vencedor.innerText = 'Vencedor: O'
    } else if(vez == 1){
        vencedor.innerText = 'Vencedor: X'
    }
    restart.addEventListener('click', function(){
        modal.style.opacity = '0'
        modal.style.display = 'none'
        fim = false
        for(let i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundImage = 'none'
        }
        jogo = [[ , , ,], [ , , ,], [ , , ,]]

    })
}

