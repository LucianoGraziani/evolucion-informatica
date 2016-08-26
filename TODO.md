- [x] Hacer que `keyboard-events.js` también tenga en cuenta las funciones `requestFullScreen` y `mozRequestFullScreen`.
- [ ] Hacer que la línea de tiempo se pueda ocultar o mostrar en dispositivos de pantallas chicas. Tiene que poder ser ocultable al arrastrarla hacia abajo con el mouse o con el dedo, y debe poder mostrarse si se arrastra hacia arriba desde el borde inferior (con el mouse o el dedo).
- [ ] Utilizar tags para que se sepa el tema a que hace referencia el hito. Además, tiene que permitir que se pueda limitar a los hitos de un solo tema, o a todos.
- [x] Permitir que se pueda maximizar un video.
- [ ] Optimizar las animaciones al forzar la carga de los bloques media antes de iniciar la animación.

	```javascript
	var i = 0;
	var slide = timeline.getData(i);
	while(slide !== null) {
		slide.loadMedia();
		slide = timeline.getData(++i);
	}
	```

- [x] Optimizar el uso de internet. Cuando una diapositiva con video deje de verse, éste debería dejar de descargarse. Como si volviera al estado 0.

	Con el siguiente código se puede realizar:

	```javascript
	var slide = timeline.getCurrentSlide(),
		media = slide._media;

	if(media !== null && media._state.loaded && media.data.mediatype.type === 'youtube') {
		if(media.player.getPlayerState() !== 5) {
			media.player.stopVideo();
		}
	}
	```

- [x] Dejar de usar la planilla de cálculos para los datos y generar un JSON adecuado.

	Con el siguiente código se puede generar el texto de un JSON para cada una de las diapositivas.

	```javascript
	var i = 0;
	var data = [];
	var slide = timeline.getData(i);
	while(slide !== null) {
		data.push(slide);
		slide = timeline.getData(++i);
	}
	console.log(JSON.stringify(data));
	```

- [ ] ¿Descargar todas las imágenes y los videos de forma que la aplicación no dependa de internet?
	- Los vídeos no. Tienen copyright de Google y del dueño.
	- Las imágenes podrían descargarse. Pero si al final se sigue dependendiendo, ¿para qué hacerlo?
		- Se puede hacer para ahorrar ancho de banda, para asegurarse que siempre estén (ya que las imágenes de google search son volátiles).
- [x] Deploy en github-pages.
- [ ] Que el F1 muestre las opciones de manejo de la aplicación.
- [x] Crear el proyecto base con el cual deployar la aplicación.
