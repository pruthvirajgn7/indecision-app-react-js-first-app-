'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handlePick = this.handlePick.bind(this);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.state = {
//             options : []
//         }
//     }

//     handleDeleteOptions() {
//         this.setState( () => {
//             return {
//                 options : []
//             };
//         });
//     }

//     handlePick() {
//         const randomNum = Math.floor(Math.random()*this.state.options.length);
//         const option = this.state.options[randomNum];
//         alert(option);
//     }

//     handleAddOption(option) {
//         if(!option){
//             return 'Please enter valid option';
//         }
//         else if(this.state.options.indexOf(option) > -1){
//             return 'Option already exists';
//         }
//         this.setState((prevState) => {
//             return {
//                 options : prevState.options.concat([option])
//             };
//         });
//     }

//     render(){
//         const title = 'Indecision';
//         const subtitle = 'Put your life in the hands of a computer';
//         return (
//             <div>
//                 <Header title={title} subtitle={subtitle} options ={this.state.options}/>
//                 <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
//                 <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
//                 <AddOption handleAddOption={this.handleAddOption}/>
//             </div>
//         );
//     }
// }

// class Header extends React.Component{   
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2> 
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//                 {
//                     this.props.options.map( (option) => <Option key={option} optionText={option}/> )
//                 }
//             </div>
//         );
//     }
// }

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

// class AddOption extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleOnSubmit = this.handleOnSubmit.bind(this);
//         this.state = {
//             error : undefined
//         }
//     }
//     handleOnSubmit(e){
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();

//         const error = this.props.handleAddOption(option);

//         this.setState(() => {
//             return {
//                 error
//             };
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleOnSubmit.bind(this)}>
//                     <input type="text" name="option" />
//                     <button>AddOption</button>
//                 </form>
//             </div>
//         );
//     }
// }


// const appRoot = document.getElementById('app');
// ReactDOM.render(<IndecisionApp/>,appRoot);

/*
      Stateless Functional components , some classes only just render the content and dont need any state , in such case we need statless functional
      components. So in those cases we can just make it as a function which returns a jsx which must be rendered. And it can also be used same as
      <functionName /> and props now should be accesed as arguments see below for option,options,action,header

      And to give default values to the props , we can use 
      functionName.defaultProps = {
        title : 'Indecision'
      }

      this can be done to statefull reactcomponents also. classname.defaultProps

      so when a function wants to return an object we use () symbol.
      for ex:
        this.setState( () => (    //used ( instead of {
            {
                option : []
            }
        ))

        There are some lifecycle methods that are only accesible in component based , but not in functional components like
        componentDidMount() , componentDidUpdate(prevProps,prevState),componentWillUnmount() there is architecture in those , but not in functioanl thats the reason why
        functional components are remdered fastly.

        localStorage.setItem(key,value); can be used to store key:value pairs
        localStorage.getItem(key,value); can be used to get key:value pairs
        localStorage.removeItem(key,value); can be used to remove key:value pairs
        localStorage.clear(); clears data

        And remember localstorage only works with string data.eventhogh we send 26 , it will store "26"
        so we should use JSON.stringify() & JSON.parse()

        localStorage persist the data when page loads.

        parseInt(string,10) is used to convert the string to number 
        NaN  -> not a number 
        isNaN() can be used to check

*/

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            var _this2 = this;

            this.setState(function () {
                return { options: _this2.props.options };
            }); // returning an object 
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Please enter valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle, options: this.state.options }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle && props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'RemoveAll'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.handleOnSubmit = _this3.handleOnSubmit.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();

            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = ''; // to empty the form input value
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOnSubmit.bind(this) },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'AddOption'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
