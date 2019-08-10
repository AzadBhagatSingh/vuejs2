var myView = new Vue({
	el:"#myapp",
	data:{
		
	},
	methods:{
		keyPress:function (event){
			console.log(event.key);
		},
		keyUp:function(event){
			console.log(event.key);
		},
		keyDown:function(event){
			console.log(event.key);
		}
	}
});