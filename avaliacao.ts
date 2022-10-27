// 1) (1,0) Em uma batalha temos dois elementos:
// a. Guerreiros possuem os atributos id, descrição, força de ataque e “life” começando
// com valor 10;
class Guerreiro implements Defensivel{
    id: string
    descricao: string
    forcaAtaque: number
    life: number = 10
    
    constructor(id: string, descricao: string, forcaAtaque: number, life: number){
        this.id = id
        this.descricao = descricao
        this.forcaAtaque = forcaAtaque
        this.life = life
    }
    
    // a. Em guerreiro: deve retornar true caso o seu life esteja zerado. Deve retornar false caso contrário;
    estaEliminado(): boolean{
        if(this.life <= 0)
        return true
        else
        return false
    }
    // a. Em um guerreiro deve subtrair o valor do ataque diretamente do seu atributo life;
    defenderAtaque(valorAtaque: number){
        return this.life = this.life - valorAtaque
    }
    
    // 4) (1,0) Um guerreiro possui um método chamado atacar que recebe um “Defensivel” e
    // chama o método defensivel.defenderAtaque(this.forcaAtaque).
    atacar(d: Defensivel){
        if(d.estaEliminado() == true){
            throw new Error("Já foi eliminado")
        }
        
        d.defenderAtaque(this.forcaAtaque)
    }
}

// b. Bases militares possuem os atributos: id, localização x e y e percentual de danos
// começando com 0.
class Base implements Defensivel{
    id: string
    localizacaoX: number
    localizacaoY: number
    percentual: number = 0

    constructor(id: string, localizacaoX: number, localizacaoY: number, percentual: number){
        this.id = id
        this.localizacaoX = localizacaoX
        this.localizacaoY = localizacaoY
        this.percentual = percentual
    }
    
    // b. Em base militar: deve retornar true caso o % de dano esteja maior ou igual a 90%.
    estaEliminado(): boolean{
        if(this.percentual > (this.percentual/0.9))
        return true
        else
        return false
    };
    // b. Em uma base militar aumenta do seu percentual de danos com o valor do ataque passado como parâmetro.
    defenderAtaque(valorAtaque: number){
        return this.percentual = this.percentual + valorAtaque
    };
    
}

// 2) (1,0) Guerreiros e bases militares devem implementar a interface:
interface Defensivel {
    // 5) (1,5) O método estaEliminado() deve ter diferentes comportamentos:
    estaEliminado(): boolean
    // 3) (1,5) O método defenderAtaque() deve ter distintos comportamentos:
    defenderAtaque(valorAtaque: number)
}

// 6) (1,5) Lance uma exceção do tipo JaEliminadoException caso o método atacar seja aplicado
// a um Defensivel já eliminado. Simule e trate um caso concreto capturando a exceção no
// script da última questão.
class JaEliminadoException extends Error{
    constructor(mensagem: string) {
        super(mensagem)
    }
}

// 7) (1,5) Crie uma classe chamada CenarioDeBatalha que possui um método chamado avaliar
// em que dois arrays de defensíveis são passados como parâmetro. Crie uma regra “da sua
// cabeça” que avalie quem ganhou uma batalha considerando o número de defensíveis
// eliminados. Atribua pesos distintos no “placar” para defensíveis do tipo guerreiro ou base
// militar. O método deve retornar uma string informando que exército foi vencedor.
class CenarioDeBatalha{

    avaliar(d: Defensivel[] = [], d1: Defensivel[] = []){
        if(d > d1){
            return console.log('Defensivel d perdeu')
        }
        else{
            return console.log('Defensivel d ganhou')
        }
        
    }
}


// 8) (1,0) Crie um script de testes que tenha crie diferentes classes instanciadas, os métodos
// atacar dos guerreiros sejam chamados e chame o método de avaliar batalha da classe
// CenarioDeBatalha passando dois arrays como exércitos.
let g1: Guerreiro = new Guerreiro('01', 'atirador', 15,15)
let g2: Guerreiro = new Guerreiro('02', 'espachim', 15, 20)
let g3: Guerreiro = new Guerreiro('03', 'barbaro', 20, 25)
let g4: Guerreiro = new Guerreiro('04', 'mago', 25, 10)
let b1: Base = new Base('01', 100, 150, 100)
let b2: Base = new Base('02', 122, 140, 120)

let guerra: CenarioDeBatalha = new CenarioDeBatalha()
let d: Defensivel[] = [g1, g3, b2]
let d1: Defensivel[] = [g2, g4, b1]
guerra.avaliar(d, d1)