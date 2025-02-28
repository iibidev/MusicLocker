# MusicLocker
Es un web donde puedes buscar canciones, artistas, albumes... gracias a la API de Deezer y para la letra de las canciones se usa lyrics.ovh.
Las llamadas a las API se hacen desde servicios de Angular y además, usa localStorage para guardar los favoritos y el historial de búsqueda.

## Arrancar el proyecto
Para que funcione la API y no de ningún error de CORS he tenido que usar un proxy, el cual usaremos para servir el proyecto:
El host y el puerto se ponen para poder entrar desde el móvil por ejemplo.
ng serve --proxy-config src/proxy.conf.json (--host 0.0.0.0 --port 80)
