
const btnPlusArry=document.getElementsByClassName("plus");
// console.log(btnPlusArry)
for(var i=0;i<btnPlusArry.length; i++){
btnPlusArry[i].addEventListener("click", increment);
}
function increment (event){
    const btnPLus=event.target
    const divElt=btnPLus.parentElement
    const quantityTAg=divElt.querySelector('p')
    var quantityvalue=parseInt(quantityTAg.innerHTML)
    quantityvalue++
    quantityTAg.innerHTML=quantityvalue

    const trElement=divElt.parentElement.parentElement
    // console.log(trElement)
    const unitePriveValue=Number(trElement.querySelector(".uniteprice").innerHTML)
    // console.log(unitePriveValue)
    const pricetag=trElement.querySelector('.price')

    var priceValue=Number(pricetag.innerHTML)
    priceValue=quantityvalue*unitePriveValue
    // console.log(priceValue)
    pricetag.innerHTML=priceValue
}

const btnMinusArry=document.getElementsByClassName('minus')
for(var i=0;i<btnMinusArry.length; i++){
    btnMinusArry[i].addEventListener("click", déincrement)
}
function déincrement (event){
    const btnMinus=event.target
    const divElt=btnMinus.parentElement
    const quantityTAg=divElt.querySelector('p')
    var quantityvalue=parseInt(quantityTAg.innerHTML)
    if(quantityvalue!=0){
    quantityvalue=quantityvalue-1}
    quantityTAg.innerHTML=quantityvalue

    const trElement=divElt.parentElement.parentElement
    const unitePriveValue=Number(trElement.querySelector(".uniteprice").innerHTML)
    
    const pricetag=trElement.querySelector('.price')

    var priceValue=Number(pricetag.innerHTML)
    priceValue=quantityvalue*unitePriveValue
    // console.log(priceValue)
    pricetag.innerHTML=priceValue 
}

const deleteArry=document.getElementsByClassName("delete")
console.log(deleteArry)
for(var i=0;i<deleteArry.length; i++){
    deleteArry[i].addEventListener("click", deel)}
    function deel(e){
        const del=e.target
        
        const trElement=del.parentElement.parentElement.parentElement
        console.log(trElement)
        trElement.remove();
        


    }
    const likeArry=document.getElementsByClassName("like")
    console.log(likeArry)
    for(var i=0;i<likeArry.length; i++){
        likeArry[i].addEventListener("click", lik)}
        function lik(e){
            const lk=e.target
       if(lk.style.color == 'white'){ lk.style.color = 'red';}
       else{lk.style.color ='white'}
          
          
        }

    
       







const checkArry=document.getElementsByClassName("check");
 console.log(checkArry)
for(var i=0;i<checkArry.length; i++){
checkArry[i].addEventListener("click", aa);
}

function aa(event) {
    const check=event.target
    const tr=check.parentElement.parentElement
    var s=0
    const pricetag=tr.querySelector('.price')
    var priceValue=Number(pricetag.innerHTML)
    const btnPLus=check.parentElement.parentElement.querySelector('.plus')
    console.log(btnPLus)


  

  const totalTag=document.querySelector(".tol")
  var totalValue=Number(totalTag.innerHTML)

 if(check.checked==true){
    totalValue+=priceValue
    totalTag.innerHTML=totalValue
    btnPLus.setAttribute('disabled', true);


 }else{
    totalValue-=priceValue
    totalTag.innerHTML=totalValue
    btnPLus.removeAttribute('disabled', false);


 }


   
 console.log(totalvalue)
}

    