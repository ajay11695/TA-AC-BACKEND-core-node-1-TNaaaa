function areaSqr(a){
    return a*a
}
function areaRec(a,b){
    return a*b
}
function areaCir(a){
    return Math.PI*(a*a)
}

module.exports={
    sqr:areaSqr,
    rec:areaRec,
    cir:areaCir
}