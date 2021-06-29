 firebase.database().ref('todos').on('child_added',function(data){
 var list=document.createElement("li")
   var displaylist=document.createTextNode(data.val().value)
   list.appendChild(displaylist)
   var getlist=document.getElementById('list')
   getlist.appendChild(list)
   var delbtn=document.createElement("button")
   var delbtntext=document.createTextNode('Delete')
   delbtn.appendChild(delbtntext)
   list.appendChild(delbtn)
   delbtn.setAttribute('id',data.val().key)
   delbtn.setAttribute('onclick','deleted1(this)')
   var editbtn=document.createElement("button")
   var editbtntext=document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
   list.appendChild(editbtn)
  editbtn.setAttribute('id',data.val().key)
   editbtn.setAttribute('onclick','edit(this)')
})

function add(){
  var getinput= document.getElementById("input");
  var database=firebase.database().ref('todos')
  var key=database.push().key;
  var todo={
    value:getinput.value,
    key:key

  }
database.child(key).set(todo)
  
getinput.value=""
  }
  


function edit(e){
  
  var prop =prompt("enter value to update",e.parentNode.firstChild.nodeValue )
   
  
  var editTodo = {

    value : prop,
    key : e.id
  }
  firebase.database().ref("todos").child(e.id).set(editTodo)
  e.parentNode.firstChild.nodeValue=prop
}

function deleted1(e){

  firebase.database().ref('todos').child(e.id).remove()
e.parentNode.remove()

}

function removeAll(){
  firebase.database().ref('todos').remove()
    var dltall=document.getElementById("list")
      dltall.innerHTML=''
}




