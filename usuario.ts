import { Album } from "./album";
import { Imagen } from "./imagen";

export class Usuario{
    private nombre: string;
    private apellido: string;  
    fotoPerfil: Imagen;
    albums: Array<Album>;

    constructor(nombre: string){
        this.nombre = nombre;
        this.albums = [];
    }

    agregarAlbum(album: Album){
        var bandera = 0;
        this.albums.forEach((key, index) => {
            if(key.getNombre() == album.getNombre()){
                bandera = 1
            }
        }); 
        if(bandera == 0){
            this.albums.push(album);
        }         
    }

    quitarAlbum(nombre: string){
        this.albums.forEach((key, index) => {
            if(key.getNombre() == nombre ){
                this.albums.splice(index, 1);
            }
        });      
    }

    obtenerAlbum(nombre: string): Album{
        var albumBuscado: Album;
        this.albums.forEach((key, index) => {
            if(key.getNombre() == nombre ){
                albumBuscado = key;
            }
        });
        return albumBuscado;     
    }

    agregarImagen(imagen: Imagen, nombreAlbum: string, posicion?: number){
        this.obtenerAlbum(nombreAlbum).agregarImagen(imagen, posicion);
    }

    eliminarImagen(nombreimagen: string, nombreAlbum: string){
        this.obtenerAlbum(nombreAlbum).eliminarImagen(nombreimagen);
    }

    asignarCaratula(nombreImagen: string, nombreAlbum: string){
        this.obtenerAlbum(nombreAlbum).asignarCaratula(nombreImagen);
    }

    asignarFotoPerfil(imagen: Imagen){
        if(this.obtenerAlbum("albumPerfil")){
            this.obtenerAlbum("albumPerfil").imagenes.forEach((key, index) => {
                if(key.getNombre() == imagen.getNombre()){
                    this.fotoPerfil = key;
                }
            })
        }
    }

    agregarImagenPosicion(imagen: Imagen){

    }



    
    }
