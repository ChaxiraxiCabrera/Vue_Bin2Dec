var app = new Vue({
    el: '#app',
    data: {
      binaryNumber: '',
      decimalNumber: '',
      errorMessage: ''
    },
    methods: {
      convertBinaryToDecimal: function () {
        if (isValidInput(this.binaryNumber)) {
          this.decimalNumber = parseInt(this.binaryNumber, 2);
          this.errorMessage = '';
        } else {
          displayError();
        }
      }
    }
});


function isValidInput(input){
  const binaryRegex = /^[01]+$/;
  if (!input.match(binaryRegex)) {
    return false;
  }

  return true;
}

function displayError(){
  this.binaryNumber = '';
  this.decimalNumber = '';
  this.errorMessage = 'You should introduce a Binary Number';
}