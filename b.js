Array.prototype.multiple = function(){
    return this.concat(this.map((res) => res * res))
}
const b = [1,2,3,4,5]
console.log(b.multiple())