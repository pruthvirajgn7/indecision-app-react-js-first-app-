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
    And now we will make all the constant variable holders to const as a good practice and remove unwanted code 

    and unlike html syntax in jsx syntax we will use className instead of class and id as id(Same) and some are different beacuse 
    they are reserved keywords in javascript like class , so we use className.

    Here just by changing count valuye will not render the new count value beacuse , jsx does not have builtin data binding 

    and templateTwo only renders once so we have to rerender templateTwo when data changes
*/

// console.log('App.js is running');

// const app = {
//     title : 'Indecision App',
//     subtitle : 'Put your life in the hands of a computer',
//     options : ['One' , 'Two']
// };


// const template = (
//     <div>
//         <h1> {app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>  
// );

// let count = 0;
// const myId = "my-id";
// const minusOne = () => {
//     count--;   
// }

// const reset = () => {
//     count = 0;
// }


// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button id={myId} className="button"  onClick={() => {       // can also define function esewhere and access that function by onclick = {funcname}
//             count++;
//         }}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// )


// const appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo,appRoot);


/*
        So we can wrap the templateTwo and reactDOM.render in a function and call that function everytime when data changes. see below
*/

// console.log('App.js is running');

// const app = {
//     title : 'Indecision App',
//     subtitle : 'Put your life in the hands of a computer',
//     options : ['One' , 'Two']
// };


// const template = (
//     <div>
//         <h1> {app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>  
// );

// let count = 0;
// const myId = "my-id";

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;   
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={myId} className="button" onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp();

/*
   Here when we submit the code without using onsubmit react dom event , whole page refreshes and the value typed will be in the url which 
   is not secure when passwords or important data is typed. so we use onSumbit event. use preventDefault();

*/

// console.log('App.js is running');

// const app = {
//     title : 'Indecision App',
//     subtitle : 'Put your life in the hands of a computer',
//     options : []
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();    // will not make our data appear in url and stops the page refreshing
//     const option = e.target.elements.option.value;   // here e.target will point to form and .elements will point to its elemnts and in that we will access name which is option in this case and its value by .value
//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = '';   // reseting to empty value
//         render();
//     }
// }

// const removeAll = () => {
//     app.options = [];
//     render();
// }

// const appRoot = document.getElementById('app');

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random()*app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1> {app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
//             <button onClick={removeAll}>Remove All</button>
//             <ol>
//                 {
//                     app.options.map( (option) => {
//                         return <li key = {option}>{option}</li>;   //when rendering a array there shoulb be unique identifier else it will give error this is done to optimuze the rendering proces
//                     })
//                 }                                 
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button>Add Option</button>
//             </form>

//         </div>  
//     );
//     ReactDOM.render(template,appRoot);
// }

// render();

/*
    Now we will move to component based architecture that is , we will break a page into components and render them . for example a page is 
    a big component by itself and it has some child components and those child components may contain some child components and so on.
    see es6 classes and subclasses from react.txtFirst we will create header component by extending React.Component class.
    And React.Component need one compulsory method called render().
    
    And to render a class(React Component) , we have to use <ClassName /> , see below.

    And incase of className used for react component must start with Capital letter , else error will be given.

    And new concept is React Component props. Sending a data along with component , those are called props.
    That is we dont want to render the same header on all pages some of the content isnide the header must change. So here we use props. That 
    we can give give key value pairs when calling the ReactCompnent like <Header title="Test value"/>  and in Header class we can access this as 
    this.props

    And important concept here is when we pass a function as a pointer . that when we use onclick = {functionName} , then if that function is 
    using this keyword , it will not work because binding is broken when we pass the functionName . so we have to bind the function to the context of 
    the object . see below .It will help the reset the context.

    But everytime calling the bind is inefficient , so we will make the use of constructor.
    in constructor we can bind that function as shown below and use the onclick={fumctionName} normally.    

    see options component

    props basically is used to send the data from parent to the child , but this makes data flow as one way , to solve this issue
    we will use methods and pass that methods to the children so that children can use that method and manipulate 

*/

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }

    handleDeleteOptions() {
        this.setState( () => {
            return {
                options : []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option){
            return 'Please enter valid option';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }
        this.setState((prevState) => {
            return {
                options : prevState.options.concat([option])
            };
        });
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} options ={this.state.options}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component{   
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2> 
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled = {!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
                {
                    this.props.options.map( (option) => <Option key={option} optionText={option}/> )
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleOnSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
            };
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input type="text" name="option" />
                    <button>AddOption</button>
                </form>
            </div>
        );
    }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>,appRoot);

/*
    

*/







