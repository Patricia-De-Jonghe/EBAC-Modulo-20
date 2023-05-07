const {resultado} = require('./calculo_MDC') 

describe('Cálculo MDC', () =>{
    it('calcular MDC de 5 e 10', () =>{
         expect(resultado).toBe(5)
    })
})