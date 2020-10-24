var app = new Vue({
    el: '#app',
    data: {
        lab: "",
        mes: "",
        col: "",
        sty: "",
        logo: "",
        logoCol: "",
        logoWid: "",
        labelCol: "",
        link: ""
    },
    methods: {},
    computed: {
        URL: function() {
            return 'https://img.shields.io/static/v1?'.concat('label=', this.lab, '&message=', this.mes,
                '&color=', this.col, '&style=', this.sty, '&logo=', this.logo, '&logoColor=', this.logoCol,
                '&logoWidth=', this.logoWid, '&labelColor=', this.labelCol, '&link=', this.link)
        }
    }
})