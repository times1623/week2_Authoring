(() => {
    //Create a component first
    const UserComponent = {
        props: ['name', 'role'],
        
        template: "#userstemplate",

        created: function(){
            console.log('adadadaddaads');
        },

        methods: {
            logFromChild() {
                console.log('logged from the component');
            },
            passedEvent() {
                this.$emit('showup');
            }       
        }

    }


    //then your vue instance

    const vm = new Vue({
        el: "#app",

        data: {
            testmessage: "sup"
        },

        created: function(){
            console.log('bababaaba');
        },

        methods: {
            calledOnParent() {
                console.log("This method lives in the main vm and was called from a component");
            }
        },

        components: {
            'activeusers' : UserComponent,
        }

    })
})();