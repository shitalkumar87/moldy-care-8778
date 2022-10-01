
function header(){
    return `<div id="headerLeft">
    <div>
        <input type="image" name="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOdHluCXbSOrJ-8iZQzmfCiR9LzhI23i8DQ&usqp=CAU" id="menu" onclick="document.getElementById('menuModal').style.display='block'">
    </div>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="Zara_Logo" id="logo">
    </div>

</div>
<div id="headerRight">
    <div id="headerRightLeft">
        <a href="./search.html">SEARCH</a>
    </div>
    <div id="headerRightRight">
         <a href="./login.html" id="logInOption">LOG IN</a>
        <a href="" id="helpOption">HELP</a>
        <span id="cart-icon" class="material-icons">
            local_mall
            </span>
             
            
    </div>
</div>`
}

export default header