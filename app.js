const form=document.querySelector('.forms')
const input=document.querySelector('.input2')
const div=document.querySelector('#temp')
const submit=document.querySelector('.submit')
// const inpcity=document.querySelector('.input2')
form.addEventListener('submit',(e)=>{

e.preventDefault()
if(input.value===''){
    alert('please enter a city')
}
// input.value=''

    axios
    .get(`
    
    https://api.weatherapi.com/v1/current.json?key=456524235a5d4ddc9f5202051232110&q=${input.value}&aqi=no
    
    
     `).then((res)=>{
    
    // setTimeout(()=>{
    
    
        div.innerHTML+=`<div class="childtemp"><h1 class='h1temp'> ${res.data.current. temp_c+' C' }</h1>  <h2 class='h1temp'> ${res.data.location.name }</h2> 
        <h2 class='h1temp'> ${res.data.location.region }</h2>  
        <h2 class='h1temp'>  ${res.data.location.country }</h2>  <h2 class='h1temp'> ${res.data.location.localtime }</h2>
        
        
        </div>`
    
    // })
        
    console.log(res)
    input.value=''
    
    
    }
    
    )
    .catch((err)=>{
    console.log(err)
    
    }
    )




})
        

// // let url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=bb85cfb526c8a47cf9921ee16ff9804c
// // `
