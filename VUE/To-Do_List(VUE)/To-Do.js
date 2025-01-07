const app = Vue.createApp({
    //variables
    data() {
        return {
        contenido: "",
        listaCompra : [],
        }
    },
    mounted() {
        this.guardado();
    },
    methods:{
        agregar() {
        this.listaCompra.push(this.contenido);
        this.contenido = "";
        this.guardar();
        },

        borrar(posicion){
            this.listaCompra.splice(posicion,1);
            this.guardar();
        },
        limpiar(){
            this.listaCompra = [];
            this.guardar();
        },
        guardar(){
            const datos = JSON.stringify(this.listaCompra);
            localStorage.setItem('listaCompra',datos);
        },
        guardado(){
            if(localStorage.getItem('listaCompra')){   
                this.listaCompra = JSON.parse(localStorage.getItem('listaCompra'));       
            }
        },
    }
});

app.mount('#app');

