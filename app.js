// TODO
//  Make it so that when your mouse hovers over a <li> of a GroceryListItem that it turns bold
// change from bold instead of strikethrough
// style not changing when hover outside of element
const {useState} = React;
const App = () => (
 <GroceryList items = {["Cucumber", "Kale"]}/>
);
const GroceryList = ({items}) => (
  <ul>
    {items.map((item, index) => <GroceryListItem name={item} key={index}/>)}
  </ul>
);
const GroceryListItem = ({name}) => {
  const [isBolded, setIsBold] = useState(false);
  const onListItemHover = (event) => setIsBold(true);
  const onListItemLeave = (event) => setIsBold(false);
  const style = {fontWeight: isBolded ? 'bold' : 'normal'};
  return <li style={style} onMouseOver={onListItemHover} onMouseLeave={onListItemLeave}>{name}</li>
};


ReactDOM.render(<App/>, document.getElementById('app'));