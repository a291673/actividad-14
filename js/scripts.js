const comprarCasco = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("casco comprado");
        }, 1000);
    })
}
const comprarGuantes = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("guantes comprados");
        }, 2000);
    })
}
const irdepaseo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("disfrute su paseo");
        }, 8000);
    })
}
const miFetchApi = async ()=>{
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await irdepaseo();
    return [casco,guantes,paseo];
}
miFetchApi()
    .then(informacion=>{
        console.log(informacion);
    })