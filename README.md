### Test buscador



> Para lanzar la app de react en el puerto 3000
```
    npm start
```
> Para lanzar la api en el puerto 8000
```
    cd servidor && npm start
```

### Api

La api esta hecha con express. No contempla manejo de errores y cuenta con lo minimo para poder cumplir con el test.

### Front

El front es un proyecto CRA3 y esta implementado en su totalidad con react hooks. Uso axios para los request y postcss con flex-box para los estilos. Tampoco esta contemplado el manejo de errores. Ya que no hay mockups ni casos de uso. No veo necesario el uso de una libreria de manejo de estados, pero habria usado mobx.   