//  Data
    let fruitdetails = [
      {name: "Apple" , qty: "8.8"},
      {name: "Apricot" , qty: "7.8"},
      {name: "Banana" , qty: "10.4"},
      {name: "Blackberries" , qty: "7"},
      {name: "Cherries" , qty: "10.9"},
      {name: "Grapes" , qty: "13.8"},
      {name: "Mango" , qty: "12.7"},
      {name: "Orange" , qty: "8"},
    ]

    // Variable Declaration
        let even = [],
            prime = [];
        let inputeven = $(".inputEven"),
          evensum = $('.evenSum');
        var ddmenu = $(".fruits");
    // Hidding Text on page load
          $(".anseven").hide();
          $(".ansprime").hide();
          $(".ansfruit").hide();


/* Function on Page Load*/
  $(document).ready(function(){
        fruitdetails.forEach(function(value){
          ddmenu.append(`<option value = ${value.name}> ${value.name} </option>`);
        });
  })



// Click Event function

    // Using of Reduce Function
      $(".submitAdd").on("click", function(){
          const val = $(".inputEven").val();
          const num = parseInt(val);

          if(!isNaN(num)) {
            for (let i=0; i<num ; i++){
              if (i === 0) {
                even[i] = 2;
              } else {
                even[i] = even[i-1] + 2;
              }
            }
          }

          let sum = even.reduce(function(total, value) {
          return total + value;
          });

          $(".anseven").show();
          $(".neven").text (inputeven.val());
          evensum.text(sum);
      });

    // Using of Filter Function
      $(".submitPrime").on("click",function(){
          let inputprime = [$(".natural1").val(), $(".natural2").val(), $(".natural3").val(), $(".natural4").val(),       $(".natural5").val(), $(".natural6").val()]

          let primenum = inputprime.filter(function(value){
            if (isprime(value)) {
              return value;
            };
          })

          $(".ansprime").show();
          if (primenum.length < 1) {
            $(".nprime").text ("none");
          } else {
            $(".nprime").text (primenum);
          }
      });

      // isprime function
      function isprime(num){
        if (num == 0 || num == 1 || num == 2){
            return false;
        } else {
            for(var i = 2; i < num; i++) {
              if(num % i === 0) {
              return false;
              }
            }
        return true;
        }
      }

    // Use of Map Function
      $(".submittemperature").on("click",function(){
          let temperature =[$(".celsius0").val(),$(".celsius1").val(),$(".celsius2").val(),$(".celsius3").val(),$(".celsius4").val()]

          let fahrenheitVal = temperature.map(function(value){
              return ((value * 9 / 5) + 32 );  /* Celsius to Fahrenheit Formula */
          });

          $(".fahrenheit").each(function(i) {
              $(this).val(fahrenheitVal[i]);
          });
      });


    // Use of Find Function
      $(".submitfruit").on("click",function(){
          let sugarvalue = fruitdetails.find(function(value){
            return value.name === $(".fruits").val();
          });
          $(".ansfruit").show();
          $(".fruit").text (sugarvalue.name);
          $(".sugar").text (sugarvalue.qty);
      });
