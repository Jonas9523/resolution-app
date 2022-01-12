

const Header = (props) => {
return (
    <h1>{props.title}</h1>
)    
}

Header.defaultProps = {
    title: 'Vorsätze 2022',
}
export default Header;