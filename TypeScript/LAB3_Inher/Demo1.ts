var a = 10;

function n() {
  console.log(a);
  var b = 20; // Function Scope
  console.log(b);
  var c = 30;
  function y() {
    b = 2;
    function z() {
      console.log(c);
      
      var d = 40;
    }
  }
}
console.log(a);
