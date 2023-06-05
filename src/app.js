/*
JSX - javascript XML
is a javascript syntax extension, it is provided by react.

below is a jsx expression and to render this we will use ReactDOM.render which requires what to render 
and where to render so that we will create a div in index.html with id and access that and pass to ReactDom as shown below.

*/

// console.log('App.js is running');

// var template = <p>This is JSX from app.js!</p>  
// var appRoot = document.getElementById('app');

// ReactDOM.render(template,appRoot);


/*
  It will give error beacuse:
  As jsx expression is not part of the javascript the browser dont understand how to render that one.

  Can use Babel wbsite and it is a javascript compiler and it will return a brwoser-compatible javascript code.

  like var template = <p>This is JSX from app.js!</p>;

  will become :  
            var template = React.createElement(
                'p',                                     // this is compiler version of the jsx expression
                null,
                'This is JSX from app.js'
            );

   instead of copying the jsx exp and getting compiled js code from babel we will install babel locally.

   and we will install yarn global add babel-cli@6.24.1 or npm install -g babel-cli@6.24.1

   and yarn init to make out project is setup

   and install yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 it will install env prset of babel

   Remember in src/app.js will contain out jsx expressions and in scripts/app.js will contain corresponding browser-compatible js code 

   Now as we installed babel env and react presets now browser can render jsx expressions.

   And to convert the code : we have to run this code :
                babel src/app.js --out-file=public/scripts/app.js --presets=env,react

*/

// console.log('App.js is running');

// var template = <p>Changed</p>  
// var appRoot = document.getElementById('app');

// ReactDOM.render(template,appRoot);

/*

    The above code only supports single jsx expression , so to make more expressions renderable we can wrap with div tag.

    and to render varible whose value is dynamically determined we have to use {} syntax.

    And we cant render objects , but can render object properties and also remder function value silimarly conditional, 
    ternary operators everything can be used.

    undefined will not any space and also dont render anything. undefined and booleans are ignored by jsx.

    true && <p>show this</p> it will execute second condition  here as first one is true
    false && <p>show this</p>  it will only give false and doest not render second one.


*/

// console.log('App.js is running');

// var appName = 'Indecision app';
// var user = {
//     name : 'pruthvi',
//     age : 27,
//     location : 'banglore',
// };


// function getLocation(location){
//     if(location){
//         return <p> Location : {location}</p>;
//     }
//     else{
//         return undefined;
//     }
// }

// var template = (
//     <div>
//         <h1> {appName}</h1>
//         <p>  Name : {user.name} </p>
//         <p>  Age : {user.age} </p>
//         <p>  {getLocation(user.location)}</p>
//         {<h3> 123 </h3>}
//         {getLocation(user.location)}
//     </div>  
// );
// var appRoot = document.getElementById('app');

// ReactDOM.render(template,appRoot);


/*
    And now we will make all the constant variable holders to const as a good practice

*/

console.log('App.js is running');

const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : ['One' , 'Two']
};


const template = (
    <div>
        <h1> {app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>  
);

const user = {
    name : 'pruthvi',
    age : 21,
    location : 'banglore',
};

function getLocation(location){
    if(location){
        return <p> Location : {location}</p>;
    }
    else{
        return undefined;
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);