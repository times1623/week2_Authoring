(() => {
    //component will go here
    const homePageComponent = {
        template: "<h2>You're on the home page </h2>"
    };

    const userPageComponent = {
        template: "<h2>You're on the user page </h2>"
    };

    const errorPageCompoent = {
        template: "<h2>You're on the error page  </h2>"
    }

    const routes = [
        { path: '/home', name: 'home', component: homePageComponent },
        { path: '/user', name: 'user', component: userPageComponent },
        { path: '/*', name: 'error', component: errorPageComponent}
    ];

    const router = new VueRouter({
        routes
    });
    
    const vm = new Vue({
        el: "#app",
        data:{
            message: "sup from vue!"
        },
        created:function(){
            console.log('paremt is live');
        },
        methods: {
            logParent(message){
                console.log("from the parent", message);
            },
            logMainMessage(message){
                console.log("called from inside a child, lives in the parent", message);
            }
        },
        components: {
            'homePageComponent': homePageComponent,
            'userPageComponent': userPageComponent,
            'errorPageComponent' : errorPageComponent
        },

        router: router

    })

})();