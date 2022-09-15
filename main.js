const userImage = document.getElementById('user__image');
const userValue = document.getElementById('user__value');
const userRefresh = document.querySelector('.user__refresh');

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    userImage.src = data.results[0].picture.large;
    userValue.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`
  }
  });

const refresh = () => {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      userImage.src = data.results[0].picture.large;
      userValue.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`
    }
    });
}

userRefresh.addEventListener('click', refresh);