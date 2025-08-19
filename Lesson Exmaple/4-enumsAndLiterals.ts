// Using Type Literals

let bestLanguage:"css";

bestLanguage = 'css';

bestLanguage = 'python'


// Using Enums

// enum Theme {Dark = 'Dark', Light = 'Light'};

// enum Colors {
//     White = '#FFFF',
//     Black = '#0000',
//     Gray = '#b1adadff',
// };

// let theme:Theme = Theme.Dark;

// const style = {
//     theme: Theme.Dark,
//     bgColor: Colors.White
// }

// if (style.theme === Theme.Dark) style.bgColor = Colors.Gray;


let theme = 'Dark';
let color = (theme === 'Dark') ? '#000' : '#FFF'

