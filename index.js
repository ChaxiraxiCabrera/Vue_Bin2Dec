var app = new Vue({
    el: '#app',
    data: {
      binaryNumber: '',
      errorMessage: ''
    },
    methods: {
      convertBinaryToDecimal: function () {
        if (isValidInput(this.binaryNumber)) {
          this.binaryNumber = this.binaryNumber.split('').reverse().join('');
          this.errorMessage = '';
        } else {
          this.binaryNumber = '';
          this.errorMessage = 'You should introduce a Binary Number';
        }
      }
    }
});


function isValidInput (input) {
  const binaryRegex = /^[01]+$/;
  if (input.length != 8) {
    return false;
  }

  if (!input.match(binaryRegex)) {
    return false;
  }

  return true;
}