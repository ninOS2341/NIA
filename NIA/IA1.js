window.onload = function(){
    const NIA = new brain.NeuronalNetwork();
    const datos = [
        {
            input: {},
            output:{}
        }
        
    ];

    NIA.train(datos);
    let respuesta = brain.likely({alert}, NIA);
    alert(`Tú:${respuesta}`);
    console.log(`NIA: ${respuesta}`);
}
