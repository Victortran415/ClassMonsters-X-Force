const getParams = () => {var url_det = document.URL.indexOf('?');
var params = new Array();
if ( url_det  != -1) {
//splits to an array called pairs all of the variable & as seperator  
var pairs = document.URL.substring(url_det+1, document.URL.length).split('&');
for (var i=0; i<pairs.length; i++) {
nameVal = pairs[i].split('=');
params[nameVal[0]] = nameVal[1];
   }
}
return params;
}

// Show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

const getUserInfo = (id,cb) =>{
  fetch(`/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
}).then((res) => {
  return res.json();
}).then((userInfo) => {
  console.log(userInfo)
  cb(userInfo); 
 })
}

const handleLoginErr = (err) => {
  console.log({"msg": err.responseJSON});
}

const getMess = (id) =>{
  fetch(`/api/messages/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.json();
  }).then((messages) => { 
    if(messages.length > 0 ){
      newMessageAlert = document.querySelector('#msg-alert');
      show(newMessageAlert); 
      } else {
      hide(newMessageAlert);
      } 
    newMessageAlert.addEventListener("click", (e) =>{
      e.preventDefault();
      console.log("been clicked")
      // this is how message pops happen - will need to update the modal 
      $('#messModal').modal('show')
    })
  return res.body;
  }).catch(handleLoginErr);
};
