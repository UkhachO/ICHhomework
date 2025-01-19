// -'Привет, Имя Фамилия!'-

let firstName = 'Oleksandr';
let lastName = 'Ukhach';
let greeting = ('Привет,' + ' ' + firstName + ' ' + lastName + '!');

console.log(greeting);

// -----------------------------------------------------------------

// -'Month'-

let month = 7;
if (month>=2 && month<=6) {

    console.log('Spring');

}else if (month>=5 && month<=9) {

    console.log('Summer');

}else if (month>=8 && month<=12) {

    console.log('Autumn');

}else {

    console.log('Winter');

}

// ------------------------------------------------------------------

// -'Month1.2'-

let monthSwitch = 10;

switch(monthSwitch) {

    case 12:
    case 1:
    case 2:

        {
            console.log('Winter');
            break;
        }

    case 3:
    case 4:
    case 5:

        {
            console.log('Spring');
            break;
        }
    
    case 6:
    case 7:
    case 8:

        {
            console.log('Summer');
            break;
        }
        
    case 9:
    case 10:
    case 11:

        {
            console.log('Autumn');
            break;
        }        

    default:

        {
            console.log('ERROR');
            break;
        }

}

// ---------------------------------------------------------------------

// -'Я люблю программирование'-

let sentencePart1 = 'Я люблю';
let sentencePart2 = 'программирование';

let completeSentence = (sentencePart1 + ' ' + sentencePart2);

console.log(completeSentence);

// ---------------------------------------------------------------------

// -'Дни недели'-

let dayOfWeek = 4;

switch(dayOfWeek) {

    case 1:

        {
            console.log('Monday');
            break;
        }

    case 2:

        {
            console.log('Tuesday');
            break;
        }

    case 3:

        {
            console.log('Wednesday');
            break;
        } 

    case 4:

        {
            console.log('Thursday');
            break;
        }

    case 5:

        {
            console.log('Friday');
            break;
        }

    case 6:

        {
            console.log('Saturday');
            break;
        }    

    case 7:

        {
            console.log('Sunday');
            break;
        }

    default:
        {
            console.log('ERROR');
            break;
        } 

}