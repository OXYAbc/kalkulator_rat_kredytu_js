function getValues()
      {
        start: do{
        var borrowedMoney = document.querySelector('#kwota').value;
        var myamount = document.querySelector('#wklad').value;      
        var kwota_pozyczki = borrowedMoney - myamount;
        
        if(kwota_pozyczki > 0)
        {
          var wynik = computeLoan();
          document.getElementById("payment").innerHTML = `${wynik} <span style="border:none; color:#FFB606; ">€</span>`
          break;
        }
        else
        {
          window.alert("NIe poprawna wartość 'Wkład własny'");
          document.getElementById("wklad").value = 0;
          document.querySelector(".slider__wklad").value=0;
        }
      }while(true)
      }

      function computeLoan(){
        var borrowedMoney = document.querySelector('#kwota').value;
        var myamount = document.querySelector('#wklad').value;      
        var kwota_pozyczki = borrowedMoney - myamount;
        
        const interestRate = document.querySelector('#input__number__procent').value;
        const lengthOfLoan = (document.querySelector('#raty').value)*12;
        const calculedInterest = interestRate / 100;
        const interestReady = calculedInterest / 12;

        const percentage = interestReady;
        const percentagePlusOne = interestReady + 1;
        const exponentiationOperator = (percentagePlusOne ** lengthOfLoan);
        const firstDividend = percentage * exponentiationOperator;
        const secondDividend = exponentiationOperator - 1;
        const division = firstDividend / secondDividend;
        const mortgage = kwota_pozyczki;
        const quotas = Math.round(mortgage * division);
        return quotas;
        borrowedMoney=0;
        myamount = 0;
        kwota_pozyczki =0;
        interestRate=0;
        lengthOfLoan=0;
        // quotas = quotas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var range1 = document.querySelector('.slider__kwota');
    var field1 = document.getElementById('kwota');
    var range2 = document.querySelector('.slider__procent');
    var field2 = document.getElementById('input__number__procent');
    var range3 = document.querySelector('.slider__okres');
    var field3 = document.getElementById('raty');
    var range4 = document.querySelector('.slider__wklad');
    var field4 = document.getElementById('wklad');

    range1.addEventListener('input', function (e) {
      field1.value = e.target.value;
    });
    field1.addEventListener('input', function (e) {
      range1.value = e.target.value;
    });
    range2.addEventListener('input', function (e) {
      field2.value = e.target.value;
    });
    field2.addEventListener('input', function (e) {
      range2.value = e.target.value;
    });
    range3.addEventListener('input', function (e) {
      field3.value = e.target.value;
    });
    field3.addEventListener('input', function (e) {
      range3.value = e.target.value;
    });
    range4.addEventListener('input', function (e) {
      field4.value = e.target.value;
    });
    field4.addEventListener('input', function (e) {
      range4.value = e.target.value;
    });
    