/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = new Vue ({
    el: "#container",
    data: {
        emailsList: [],
        listLength: 10,
    },
    methods: {
        /*
        FATTA PRIMA PROVA CON UNA SOLA MAIL
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    this.emailList.push(resp.data.response);
                })   
        }*/
        getEmailsList(){
            const list = [];

            if(list.length !== this.listLength) {

                for(let i = 0; i < this.listLength; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((resp) => {
                            list.push(resp.data.response);
                    })
                }

                this.emailsList = list;
            }    
        }       
    }
})