//Bloquear peticiones

//Bloquear archivo
// self.addEventListener("fetch", (event) => {
//   if (event.request.url.includes("./css/styles.css")) {
//     event.respondWith(null);
//   } else {
//     event.respondWith(fetch(event.request));
//   }
// });
//Cambiar estilos
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("./css/styles.css")) {
    let respuesta = new Response(
      `
    body{
        color:black;
    }`,
      {
        headers: {
          "Content-Type": "text/css",
        },
      }
    );
    event.respondWith(respuesta);
  }
});
//Cambiar un archivo
// self.addEventListener("fetch", (event) => {
//   if (event.request.url.includes("img")) {
//     let respuesta = new Response(
//       `<img src="https://www.stampaprint.net/es/blog/wp-content/uploads/2016/05/gif-animados-ejemplo.gif">`
//     );
//     event.respondWith(respuesta);
//   }
// });
