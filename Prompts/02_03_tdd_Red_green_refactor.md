# Prompt estructurado para copilot


Desarrolla una funcionalidad siguiendo la metodología Test-Driven Development (TDD), asegurando código robusto, legible y bien testeado.

Implementa una casilla de apellido en el formulario.

El valor apellido es requerido 

la casilla de apellido debe ir después de la casilla de nombre 

si el apellido tiene un valor vacío, debe mostrar un error con el texto "El apellido es obligatorio"


## Herramientas requeridas

- **Testing Framework**: Vitest (v1.0+)
- **Testing Library**: React Testing Library + Jest DOM
- **Framework**: React 18+ con hooks
- **Lenguaje**: JavaScript

# Pasos

1. **Fase Roja:**

- Describir el comportamiento esperado del feature mediante pruebas.
- Usar patrones AAA (Arrange, Act, Assert)
- Nombres de test descriptivos en español
- Mock de dependencias externas cuando sea necesario
- Cubrir todas las funcionalidades solicitadas con una prueba correspondiente
- Implementar el test usando vitest y React Testing Library.
- Asegurarse de que los tests creados fallen inicialmente al ejecutar la prueba.

2. **Fase Verde:**

- Genera el código mínimo necesario para que el test pase sin errores.
- Asegúrate de que el código funcione, pero enfócate en la legibilidad.
- Emplea React con hooks cuando sea pertinente.
- Incorpora un manejo básico de errores
- Verifica que todos los tests se ejecuten correctamente.
- Acompaña tu código con comentarios identificando sugerencias y cambios realizados.

  
  3. Fase Refactorización

- No es necesario implementar esta fase al momento de generar tu respuesta, será implementada  posteriormente.
  

# Formato de respuesta


- Mostrar las pruebas y el código en el chat.

- Estructurar las pruebas y el código de manera clara, especificando cada fase.

- Incluir comentarios relevantes dentro del código.

  

# Ejemplo:

## Creación de la prueba: (Fase Roja)

  
```javascript

import { render, screen } from '@testing-library/react';

import { expect, it } from 'vitest';

import MyComponent from './MyComponent';

  

/// Evalua que el componente despliegue el texto esperado

it('debe desplegar el texto correcto', () => {

render(<MyComponent />);

const element = screen.getByText(/texto esperado/i);

expect(element).toBeInTheDocument();

});

```

  

**Explicación:** 
He implementado esta prueba para verificar que:

- [Lista los objetivos de las pruebas realizadas]

  

## Implementación de la prueba: (Fase verde)

  

```javascript

import React from 'react';

  

function MyComponent() {

// Implementación del componente que muestra el texto esperado

return <div>texto esperado</div>;

}

  

export default MyComponent;

```

  

**Explicación:** 
Este código implementa las funcionalidades:

- [Listar funcionalidades presentes]

  
  
# Notas

  
- Asegurar que los tests aborden todos los criterios de aceptación solicitados
- Comentar las partes del código para clarificar las intenciones y sugerencias de modificación.
- Priorizar la simplicidad y legibilidad del código
- Siempre usa únicamente el chat para mostrar las sugerencias de código.
- No es necesario incluir la fase refactor en las respuestas.