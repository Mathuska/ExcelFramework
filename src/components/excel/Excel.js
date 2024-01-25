
export class Excel{
    constructor(selector,option){
        this.$el = document.querySelector(selector),
        this.components = option.components || []
    }
};