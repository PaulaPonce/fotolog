function agregaPosteo() {
	//contendor, nombre y comentarios
	var containerPosteos = document.getElementById('contenedor-posteos'); //div donde irán los posteos
	var nombreFF = document.getElementById('nombre').value; //input nombre
	var contenidoFF = document.getElementById('cajaposteos').value; //textarea

	//nodo elemento donde irá el post
	var nuevoPost = document.createElement('div'); 

	//elementos donde se guardaran los valores
	var contenedorNombre = document.createElement('strong');
	var contenedorPost = document.createElement('p');
	var separacion = document.createElement('hr'); //<hr> se usa para separar contenido

	//elemento para corazón
	var parrafCorazon = document.createElement('p');
	var i = document.createElement('i');
	parrafCorazon.appendChild(i); //p es padre de ícono corazón

	//atributos de corazón
	parrafCorazon.setAttribute('class', 'corazon');
	i.setAttribute('class', 'fa fa-heart');
	i.setAttribute('arial-hidden', 'true');

	//transformar nombre a nodo texto
	var nodoNombre = document.createTextNode(nombreFF + ' escribió: ');
	var nodoPosteo = document.createTextNode(contenidoFF);

	//asignar padres a nodos creados
	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);

	//asignar padres a nombre y contenido
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);

	//función click para el corazón y se le asigna la clase rojo de css
	i.addEventListener('click', function(){
		i.classList.toggle('rojo');
	});

	//atributos del post
	nuevoPost.setAttribute('class', 'posteo');
	containerPosteos.appendChild(nuevoPost);
	
	//resetear campos
	document.getElementById('nombre').value = "";
	document.getElementById('cajaposteos').value = "";
}