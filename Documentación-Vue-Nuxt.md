# Documentacion de Vue.js y Nuxt.js

Vue.js es un framework progresivo para crear interfaces. Nuxt.js usa Vue para
construir aplicaciones modernas con rutas, SSR (Server-Side Rendering: la
pagina se genera en el servidor antes de enviarse al navegador, lo que ayuda
con SEO y mejora la carga inicial), SSG (Static Site Generation: las paginas se
generan por adelantado como archivos estaticos, ideal para sitios rapidos como
blogs, documentacion o landing pages) y una estructura mas completa.

## Que deberias estudiar antes

Para entender mejor este framework, primero conviene dominar:

1. HTML: lenguaje de estructura para paginas web.
   <https://github.com/yetsin7/Curso-de-HTML>
2. CSS: lenguaje de estilos para diseno visual y responsive.
   <https://github.com/yetsin7/Curso-de-CSS>
3. JavaScript: lenguaje de logica, interactividad y datos en la web.
   <https://github.com/yetsin7/Curso-de-JavaScript>

Si descargaste solo este repo, esos tres cursos te dan la base que Nuxt asume.

## Documentacion recomendada

- [Vue official docs](https://vuejs.org/guide/introduction.html)
  Explica desde cero como funciona Vue.
- [Vue tutorial](https://vuejs.org/tutorial/)
  Permite practicar los fundamentos paso a paso.
- [Nuxt docs](https://nuxt.com/docs)
  Es la referencia principal para rutas, servidor, configuracion y despliegue.
- [Vue Router](https://router.vuejs.org/)
  Muestra como funciona la navegacion entre paginas en apps Vue.
- [Pinia](https://pinia.vuejs.org/)
  Pinia es una libreria para manejar estado global, por ejemplo carrito, usuario
  o filtros compartidos.

## Temas principales que debes estudiar

1. Componentes:
   bloques reutilizables de interfaz.
2. Templates y directivas:
   forma en que Vue pinta datos y responde a condiciones o bucles.
3. Props y emits:
   comunicacion entre componentes padre e hijo.
4. Reactividad:
   sistema por el cual Vue actualiza la interfaz cuando cambian los datos.
5. Computed y watchers:
   herramientas para derivar valores o reaccionar a cambios.
6. Formularios y eventos:
   captura de interacciones del usuario.
7. Composition API:
   estilo moderno de Vue para organizar logica reutilizable.
8. Lifecycle hooks:
   puntos del ciclo de vida de un componente, como montaje o actualizacion.
9. Ruteo:
   manejo de paginas y URLs.
10. Estado global con Pinia:
   datos compartidos entre varias partes de la app.
11. SSR, SSG y estructura de Nuxt:
   distintas formas de renderizar y organizar una aplicacion.

## Orden recomendado

1. [Introduccion a Vue](https://vuejs.org/guide/introduction.html)
   Para entender que problema resuelve Vue.
2. [Fundamentos de Vue](https://vuejs.org/guide/essentials/application.html)
   Para dominar la base del framework.
3. [Sintaxis de templates](https://vuejs.org/guide/essentials/template-syntax.html)
   Para renderizar datos y usar directivas.
4. [Reactividad](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
   Para entender por que la UI cambia cuando cambian los datos.
5. [Componentes](https://vuejs.org/guide/essentials/component-basics.html)
   Para construir interfaces por piezas reutilizables.
6. [Comenzar con Nuxt](https://nuxt.com/docs/getting-started/introduction)
   Para pasar de Vue puro a una estructura de app mas completa.

## Ejemplo basico de Vue

```vue
<script setup>
const mensaje = "Hola desde Vue";
</script>

<template>
  <h1>{{ mensaje }}</h1>
</template>
```
