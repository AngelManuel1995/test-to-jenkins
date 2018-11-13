import { numero } from "./number";

describe('Pruebas con numeros', () => {
    it('Debería retornar 100', () => {
        const res = numero(200)
        expect(res).toBe(100)
    })
    it('Debería retornar el número ingresado + 1', () => {
        const numeroPrueba = 87
        const res = numero(87)
        expect(res).toBe(numeroPrueba + 1)
    })
})