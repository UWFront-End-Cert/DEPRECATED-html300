// toggle the border size between 0 and 1 

export const  changeBorder = {
    data(){
        return{
            size: 0
        }
    },
    methods: {       
        changeBorder(size){
            if (size>=1) {
                this.size==0;
            } else if(size==0){
                this.size==1;
            }
        }
    }
}