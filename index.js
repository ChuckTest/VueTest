var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

//app.message = 'I have changed the data!';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

//app2.message = 'Hello chuck';