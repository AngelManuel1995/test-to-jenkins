import { mensaje } from "./string";

describe('Pruebas de string', () => {
    it('Debe regresar un string',() => {
        const respuesta = mensaje('Fernando')
        expect(typeof respuesta).toBe('string')
    })
    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = "Angel Manuel Goez Giraldo"
        const respuesta = mensaje(nombre)
        expect(respuesta).toContain(nombre)
    })
})