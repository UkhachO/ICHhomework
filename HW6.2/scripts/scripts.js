// 'Задание 1'

let i = 84;
if (i <= 60 ) {
    console.log('F');

}else if (i >= 60 && i <= 69) {
    console.log('D');

}else if (i >= 70 && i <= 79){
    console.log('C');

}else if (i >= 80 && i <=89) {
    console.log('B')

}else {
    console.log('A')
}

// 'Задание 2'

let dayOfWeek = 6;

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