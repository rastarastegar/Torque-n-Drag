export class Container extends React.Component {
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div>Map will go here</div>
      )
    }
  }
  
  export default GoogleApiComponent({
    apiKey: "AIzaSyD1KLKK9vZ_Cs7AAlQFDEJlSa1X0xvq9tM"
  })(Container)