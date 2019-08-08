var myview = new Vue({
	el:"#myapp",
	data:{
		name:"Azad"
	},
	methods:{
		run: function (msg){
			return "This is running "+msg;
		}
	}
});