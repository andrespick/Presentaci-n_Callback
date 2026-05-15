function obtenerUsuario(id, callback) {
    if (id <= 0) {
        callback(new Error('ID inválido'), null);
        return;
    }

    callback(null, { id: id, nombre: 'Ana' });
}

obtenerUsuario(0, (err, usuario) => {
    if (err) {
        console.error(err.message);
        return;
    }

    console.log(usuario.nombre);
});