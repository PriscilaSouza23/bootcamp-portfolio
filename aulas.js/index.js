const nome =  'Andressa'
const peso = 65
const altura = 1.65

const  imc  =  peso / ( altura * altura )

if  ( imc >= 30) {
    console.log(` ${nome} você está acima do peso`)
}  else  {
    console.log(` ${nome} você não está acima do peso`)
}

console . log (imc)


const usuario = {
        nome: 'Diego',
        empresa: {
            nome: 'Rocketseat',
            cor: 'roxa',
            foco: 'programação',
            endereco: {
                rua: 'Rua Guilherme Gembala',
                numero: 260
            }
        }
    }


console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)

const programador = {
    nome: 'Priscila',
    idade: 30,
    tecnologias: [
        { nome:'Python', especialidade:'Data Science'},
        { nome:'C++', especialidade:'Desktop'},
        { nome:'JavaScript', especialidade:'Web/Mobile'}
    ]
  };
  console.log(`O usúario ${programador.nome} tem ${programador.idade} anos e usa uma tecnologia ${programador.tecnologias[1].nome} com especialidade em ${programador.tecnologias[1].especialidade}`)