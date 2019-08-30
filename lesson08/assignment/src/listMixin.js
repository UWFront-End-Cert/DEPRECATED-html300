export default{
	props:['album'],

	methods:{
		toggle: function(){
			// Doesn't work, why?
			// this.isActive = !this.isActive;
			alert('hello world')
		}
	}
}