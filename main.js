const userImage = document.getElementById('userImage');

let user;
let userImageURL;

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    user = data;
    userImageURL = data.results[0].picture.large;
    userImage.src = userImageURL;
  }
  });

