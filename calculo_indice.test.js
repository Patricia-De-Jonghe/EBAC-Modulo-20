const {numeros} = require('./calculo_indice') 

describe('cálculo índice', () =>{
  
  it('cálculo do índice menor', () =>{
    expect(Math.min(...numeros)).toBe(2)
  })

  it('cálculo do índice maior', () =>{
    expect(Math.max(...numeros)).toBe(19)
  })
})