const  nome  =  'Marisa'
const  sexo  =  'F'
const  idade  =  55
const  contribuição  =  30

const  calculoContribuicao  =  idade  +  contribuição

const  homemAposenta  =  sexo  ==  'M'  &&  contribuição >= 35  &&  calculoContribuicao >= 95
const  mulherAposenta  =  sexo  ==  'F'  &&  contribuição >= 30  &&  calculoContribuicao >= 85

if(homemAposenta  ||  mulherAposenta)  {
    console .log ( ` ${nome} , você pode se aposentar!` )
}  else  {
    console .log ( ` ${nome} , você não pode se aposentar!` )
}