let display ='' , op ='', first_val ='' , second_val ='', total ='',total02 ='';

function setValue(x)
{

                calculator.display.value += x;
                first_val = calculator.display.value;

}

function operator(formula)
{
                op = formula;
                second_val = first_val;
                first_val = '';    
                calculator.display02.value = second_val;
                calculator.display.value = null;


}

function comppute(result)
{
       
       switch(op)
       {
               case'+':
                        total = parseInt(second_val) + parseInt(first_val);
                        break;

               case'-':
                        total =parseInt(second_val) - parseInt(first_val);
                        break;
               
               case'x':
                        total = parseInt(second_val) * parseInt(first_val);
                        break;
               
               case'/':
                        total = parseInt(second_val) / parseInt(first_val);
                        break;
               
               default:
                       break;
       }
       
                total02 = total;
                calculator.display02.value = total02;
                calculator.display.value = '';
                first_val = '';
                second_val = '';


}

function clearInput()
{
        calculator.display.value = '';
        calculator.display02.value = '';
        first_val = '';
        second_val = '';
}

