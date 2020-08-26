const app = new Vue({
    el: '#lista-compras',
    data: {
        header: 'Listado de útiles',
        estado: true,
        newUtil: '',
        utiles: []
    },
    methods: {
        agregarUtil: function() {
            if (this.newUtil) {
                this.utiles.push({
                    util: this.newUtil,
                    comprado: false
                })
                this.newUtil = ''
            } else {
                alert('Ingrese dato a la lista')
            }
        },
        comprado: function(index) {
            this.utiles[index].comprado = !this.utiles[index].comprado
        }
    }
})