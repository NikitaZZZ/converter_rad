let app = new Vue({
    el: '#app',
    data: {
        radInput: 1,
        convertRadToDegAnswer: 'Ответ',
        convertDegToRadAnswer: 'Ответ' 
    },

    methods: {
        convertRadToDeg() {
            this.convertRadToDegAnswer = (this.radInput * (180 / Math.PI)).toFixed(3)
        },

        convertDegToRad() {
            this.convertDegToRadAnswer = (this.radInput * (Math.PI / 180)).toFixed(3)
        }
    }
})