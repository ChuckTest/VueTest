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

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
//app3.seen = false;

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }]
    }
});
//app4.todos.push({ text: 'chuck' });
