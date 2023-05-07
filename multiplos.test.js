const {resultado} = require('./multiplos') 

describe('Múltiplos', () =>{

  it('calcular soma dos multiplos', () =>{
    expect(resultado).toBe(267333)
  })
})