var myView = new Vue({
	el:"#myapp",
	data:{
		counter:0
	},
	methods:{
		keypressFunction:function (){
			console.log('Key pressed...');
		}
	}
});