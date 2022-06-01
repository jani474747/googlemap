let iframe = document.querySelector("#map_canvas")

const getmap = ()=>{
    let name = document.querySelector(".City").value;
    iframe.src = `https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}