# Evolución histórica de la Informática APP

Final de `Aspectos Legales, Profesionales y Sociales de la Informática` de la carrera de Licenciatura en Sistemas de la Universidad Nacional de Río Negro, Argentina.

# Ver en vivo

Se puede ver desde esta página: <http://lucianograziani.github.io/evolucion-informatica/>.

# Cómo desarrollar

- En la carpeta `src` se encuentran todos los archivos a modificar. Actualmente no hay sub-carpetas.
- Por ahora, el archivo de contenido está en el Drive.
- Las tareas de cada uno están en la carpeta `tareas` (si no existe, créensela).
- Guarden todos las referencias a documentos externos.

# Modo de uso

## Con NodeJS instalado

Ejecutar `npm run start:{win|mac|linux}` (una de esas tres opciones) y se abrirá la página en el explorador. Por ejemplo: `npm run start:win`.

## Sin NodeJS instalado

Abrir el archivo `src/index.html`.

## ¿Cómo agregar etiquetas a las diapositivas?

Dentro del campo de texto de cada hito en la planilla de cálculo se debe agregar al final, lo siguiente:

```html
<ul id="tags-temas">
  <!-- Aquí dentro van las etiquetas -->
</ul>
```

### Tipos de etiquetas

```html
  <li><a role="button" class="tag inteligencia-artificial">Inteligencia Artificial</a></li>
```

```html
  <li><a role="button" class="tag robotica">Robótica</a></li>
```

```html
  <li><a role="button" class="tag automata">Autómata</a></li>
```

```html
  <li><a role="button" class="tag hardware">Hardware</a></li>
```

```html
  <li><a role="button" class="tag software">Software</a></li>
```

```html
  <li><a role="button" class="tag e-commmerce">E-commmerce</a></li>
```

```html
  <li><a role="button" class="tag internet">Internet</a></li>
```

```html
  <li><a role="button" class="tag bases-de-datos">Bases de Datos</a></li>
```

```html
  <li><a role="button" class="tag data-mining">Data Mining</a></li>
```

```html
  <li><a role="button" class="tag telecomunicaciones">Telecomunicaciones</a></li>
```

```html
  <li><a role="button" class="tag redes-sociales">Redes Sociales</a></li>
```

```html
  <li><a role="button" class="tag empresas">Empresas</a></li>
```
