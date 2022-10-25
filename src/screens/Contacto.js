export default function Contacto() {
    return (
        <>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Apellido</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Edad</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <hr/>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}