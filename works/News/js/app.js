window.ee = new EventEmitter();

var my_news = [
    {
        author: 'Первый человек',
        text: 'Lorem ipsum dolor sit amet.',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        author: 'Второй человек',
        text: 'Lorem ipsum dolor sit amet.',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        author: 'Гость',
        text: 'Lorem ipsum dolor sit amet.',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
];
var Article = React.createClass({
    propTypes:{
        data:React.PropTypes.shape({
            author:React.PropTypes.string.isRequired,
            text:React.PropTypes.string.isRequired,
            bigText:React.PropTypes.string.isRequired
        })
    },
    getInitialState:function(){
        return {
            visible: false
        }
    },
    readmoreClick: function(e){
        e.preventDefault();
        this.setState({visible:true});
    },
    render: function() {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText=this.props.data.bigText,
            visible=this.state.visible;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <a href="#" onClick={this.readmoreClick} className={"news_readmore "+(visible?'none':'')} >Подробнее...</a>
                <p className={"news_big_text "+(visible?'':'none')}>{bigText}</p>
            </div>
        )
    }
});
var Add=React.createClass({
    onButtonClick:function(e){
        e.preventDefault();
        var textEl=ReactDOM.findDOMNode(this.refs.text);
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = textEl.value;

        var item=[{
            author:author,
            text:text,
            bigText:'...'
        }];
        window.ee.emit('News.add', item);
        textEl.value='';
        this.setState({textIsEmpty:true});
    },
    getInitialState: function () {
      return{
          agreeNotChecked:true,
          authorIsEmpty:true,
          textIsEmpty:true
      }
    },
    onAuthorChange:function(e){
        if(e.target.value.trim().length>0){
            this.setState({authorIsEmpty:false})
        }else{ this.setState({authorIsEmpty:true})}
    },
    onTextChange:function(e){
        if(e.target.value.trim().length>0){
            this.setState({textIsEmpty:false})
        }else{ this.setState({textIsEmpty:true})}
    },
    onAgreeChange:function(e){
        this.setState({agreeNotChecked:!this.state.agreeNotChecked})
    },
    componentDidMount:function(){
        ReactDOM.findDOMNode(this.refs.author).focus();
    },

    render:function(){
        return(<form className="add cf">
                <input onChange={this.onAuthorChange} type="text" placeholder="Ваше имя" className="add_author" defaultValue='' ref='author' />
                <textarea onChange={this.onTextChange} className="add_text" defaultValue='' ref='text'/>
                <label className="add_checkrule">
                    <input onChange={this.onAgreeChange} type="checkbox"  ref="checkrule"/>Я согласен с правилами
                </label>
                <button disabled={this.state.agreeNotChecked|| this.state.authorIsEmpty|| this.state.textIsEmpty} className="add_btn" onClick={this.onButtonClick} ref="alert_button">Добавить новость</button>
            </form>
        )
    },
});


var News=React.createClass({
    getInitialState:function () {
        return{
            counter:0
        }
    },

    propTypes:{
        data: React.PropTypes.array.isRequired
    },
    render:function(){
        var data=this.props.data;
        if(data.length){
            var newsTemplate=data.map(function(item, index){
                return (
                            <div key={index}>
                                <Article data={item}/>
                            </div>
                            )
            })
        }else{
            newsTemplate=<p>Новостей нет</p>
        }
        return(
            <div className="news">
                {newsTemplate}
                <strong className={data.length>0? '':'none'}> новостей:{data.length}</strong>
            </div>
        )
    }
});

var App=React.createClass({
    getInitialState:function () {
        return{
            news:my_news
        }
    },
    componentDidMount:function(){
        var self=this;
        window.ee.addListener('News.add', function(item){
          var nextNews=item.concat(self.state.news);
          self.setState({news:nextNews})
        })
    },
    componentWillUnmount:function () {
        window.ee.removeListener('News.add');
    },
    render: function(){
        console.log('render');
        return(
            <div className="app">
                <Add/>
                <News data={this.state.news} />
            </div>
        )
    }
});
ReactDOM.render(
    <App />,
   document.querySelector('.wrapper')
);