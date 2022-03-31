let app = new Vue({
    el: '#app',
    data: {
        radInput: 1,
        rad2Input: 1,
        convertRadToDegAnswer: 'Рад в °',
        convertDegToRadAnswer: '° в рад' 
    },

    methods: {
        convertRadToDeg() {
            this.convertRadToDegAnswer = (this.radInput * (180 / Math.PI)).toFixed(3)
        },

        convertDegToRad() {
            this.convertDegToRadAnswer = (this.rad2Input * (Math.PI / 180)).toFixed(3)
        }
    }
})