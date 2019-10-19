import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference, DataSnapshot } from '@angular/fire/database/interfaces';
//import clases forms reactivos
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage'

import Swal from 'sweetalert2';
import { from } from 'rxjs';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {
  //variables para la caraga de imagenes
  imgUrl;

  //////////////////
  modoTabla: boolean = true;
  //variable que va a representar a todo
  formulario: FormGroup;

  refUsuarios: DatabaseReference;
  listaUsuarios: Array<any>;

  constructor(private _realtime: AngularFireDatabase, private zone: NgZone, private _storage: AngularFireStorage) {
    this.refUsuarios = this._realtime.database.ref("usuarios")
    //inicializando el form reactivo
    this.formulario = new FormGroup(
      {
        "campo_nombre": new FormControl('', Validators.required),
        "campo_apellido": new FormControl('', Validators.required),
        "campo_imagen": new FormControl(null, Validators.required),
        "campo_email": new FormControl('', [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")
        ])
      }
    );
  }

  ngOnInit() {
    //console.log(this.refUsuarios.key);
    //referencia.on('evento,(data)={}) => trae la data cada vez que el evento sucede
    //referencia.once('evento').then(()=>{}) => trae la data del nodo una sola vez
    //this.traerDataConOn()
    this.traerUsuariosConOn()
  }
  // Trae a los usuarios con la funcion on e itera los objetos con un ciclo array.forEach(element => {

  // });
  traerUsuariosConOn() {
    this.refUsuarios.on('value', (usuariosSnap: DataSnapshot) => {
      let usuariosTmp = []
      usuariosSnap.forEach((usuario) => {
        let objUsuarioTmp = {
          id: usuario.key,
          nombre: usuario.val().nombre,
          apellido: usuario.val().apellido,
          imagen: usuario.val().imagen
        }
        //console.log(objUsuarioTmp);
        usuariosTmp.push(objUsuarioTmp)
      })
      this.zone.run(() => {
        this.listaUsuarios = usuariosTmp;
      })

      console.log(this.listaUsuarios);
    })

  }
  eliminarUusario(id) {
    Swal.fire({
      title: 'Borrar Registro',
      text: 'Seguro que quiere eliminar el registro',
      type: 'question',
      showCancelButton: true
    }).then(rpta => {
      if (rpta.value) {
        console.log(id);
        this.refUsuarios.child(id).remove().then(() => {
          console.log("registro borrado correctamente")
          Swal.fire({
            title: 'Exito',
            text: 'Registro eliminado correctamente',
            type: 'success',
            timer: 1500,
          })
        })
      }
    })



  }
  // traerDataConOn(){
  //   this.refUsuarios.on('value', (data: DataSnapshot)=>{
  //     let objUsuario = data.toJSON();
  //     for (const key in objUsuario) {
  //       //console.log(`llave => ${key}`);
  //       console.log(objUsuario[key]);

  //     }
  //   })
  // }

  // traerDataconOnce(){
  //   this.refUsuarios.once('value').then((data: DataSnapshot)=>{
  //   //console.log(data.toJSON());
  //     let objUsuario = data.toJSON();
  //     for (const key in objUsuario) {
  //       //console.log(`llave => ${key}`);
  //       console.log(objUsuario[key]);

  //     }
  //   })
  // }
  //envento
  onSubmit(miimg) {
    console.log(miimg.files[0]);

    Swal.fire({
      title: 'Espere',
      text: 'Estamos creando registros',
      type: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
    })
    console.log(this.formulario);

    //obtener el objeto del formulario
    console.log(this.formulario.value)
    //
    console.log(this.formulario.get('campo_email').value);
    //armar el objeto para enviarlo a firebase
    //1. crear un id apartir de la refencia al nodo 'usuario'
    let key = this.refUsuarios.push().key;
    //subir la imagen a firebase
    let archivo = miimg.files[0];
    const task = this._storage.upload('fotos/'+key, archivo);
    task.then(() => {
      //en este scope la imagen ya se sucion con el nombre de la key geerada
      //ahora obtendremos la url de descarga de la imagen
      this._storage.ref('fotos/' + key).getDownloadURL().subscribe((url_imagen)=>{
        console.log(key);
      //2. crear una referencia al nodo 'usuarios'=>'key'
      let refkey = this.refUsuarios.child(key);
      //3. ENVIAR EL OBJETO USUARIO A SU REFERENCIA
      refkey.set({
        nombre: this.formulario.get('campo_nombre').value,
        apellido: this.formulario.get('campo_apellido').value,
        email: this.formulario.get('campo_email').value,
        imagen: url_imagen
      }).then(() => {
        Swal.fire({
          title: 'Exito!',
          text: 'Registro creado correctamente',
          type: 'success',
          timer: 1000
        });
        this.formulario.reset();

      })
    })
      
  })
    ///////////////////////


  }
  previsualizarFoto(event) {
    let archivo = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () => {
      this.imgUrl = reader.result;
      console.log(this.imgUrl);
    }

  }
  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
