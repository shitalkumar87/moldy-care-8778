
let size = (eu,uk)=>{
        console.log(eu,uk);

        const container_size = document.getElementById('prod_sizes').innerHTML=null;
        
        const p_div = document.createElement('div');
        p_div.className="prod_sizes_div"
        const pr = document.createElement('p');
        pr.innerText=`EU ${eu} (UK ${uk})`;
        pr.style.fontWeight="bold"

        p_div.append(pr)

        let cont2=document.getElementById('prod_sizes');
        cont2.style.height="20px"
        cont2.append(p_div);  
}


document.getElementById('prod_addToBag').addEventListener("click",()=>{
    addCart()
});

let addCart = ()=>{
    alert("product added")
}