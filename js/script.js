/**
 * BOOLZAPP
 */

// day js
var time = document.getElementById('time');

// Plugins
dayjs.extend(dayjs_plugin_customParseFormat);

// format date
dayjs.locale('it');
time = dayjs().format('DD/MM/YYYY HH:mm:ss');


// vue js
const app = new Vue({
    el: '#app',
    data: {
        // Elenco contatti
        contatti: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        indexContatti: 0,
        myMessage: '',
        botMessage: 'ok',
        search: '',
    },
    methods: {
        // visualizzazione dinamica dei messaggi
        activeMessage(index) {
            this.indexContatti = index;
        },
        // messaggio inserito dall'utente
        newMessage() {
            if(this.myMessage !== '') {
                this.contatti[this.indexContatti].messages.push({
                    message: this.myMessage,
                    status: 'sent',
                    date: time,
                });
                this.myMessage = '';
                // risposta automatica bot
                setTimeout(() => {
                    this.contatti[this.indexContatti].messages.push({
                        message: this.botMessage,
                        status: 'received',
                        date: time,
                    })
                }, 1000);
            }

        },
        // filtro ricerca nomi
        filterUser() {
            this.contatti.forEach((user) => {
                if(user.name.toLowerCase().includes(this.search.toLowerCase())) {
                    user.visible = true;
                } else {
                    user.visible = false;
                };
                console.log(user);
            })
        }
    },


});