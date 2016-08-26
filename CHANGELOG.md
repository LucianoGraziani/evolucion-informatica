# Evolución histórica de la informática

## v0.5.0-alpha1
- [2016-08-26] `utils@stopYoutube`: se optimizó el método para que funcionara con los botones siguiente/anterior.
- [2016-08-26] `slice-counter@advanceSlice`: al avanzar de diapositiva, agrega nuevas y quita anteriores.
- [2016-08-26] `slice-counter@returnSlice`: al retroceder de diapositiva, agrega anteriores y quita nuevas.
- [2016-08-26] `keyboard-events`: se agregaron la invocación a los métodos necesarios.
- [2016-08-25] `utils@fullScreenVideo`: se agregó el método que permite que los videos se puedan poner en pantalla completa.
- [2016-08-25] `content`: módulo del contenido de la línea del tiempo. Ofrece una serie de métodos públicos para poder manipular el contenido.
- [2016-08-20] `mouse-events`: se agregaron divs wrappers de los botones de avanzar/retroceder para que puedan invocar los métodos necesarios.

## v0.4.0-alpha1
- [2016-06-16] `utils@stopYoutube`: detiene la descarga de los videos.
- [2016-06-16] `timeline-events`: este archivo contendrá todos los observers de eventos de la línea de tiempo.
- [2016-06-16] `TODO`: se agregaron 3 scripts que buscan solucionar 3 problemas.
	- Solucionado: `Optimizar el uso de internet`.
	- Solucionado: `Generar un JSON adecuado`.
	- Script propuesto: `Optimizar las animaciones`.
- [2016-06-09] `keyboard-events`: se agregó el polyfill para la API para `requestFullscreen`.
- [2016-06-09] `keyboard-events`: se agregaron los eventos para activar la pantalla completa, y la navegación por diapositivas con las teclas de dirección.
- [2016-06-09] `App`: se agregó la estructura básica de la aplicación.
