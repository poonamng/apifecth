const result=document.querySelector("#output")

const url =" https://jsonplaceholder.typicode.com/todos"

fetch(url).then((res)=>{
   return res.json()
   .then((data)=>{
    
       for(i of data){
          result.innerText=(i.title)
       }
   })
})

