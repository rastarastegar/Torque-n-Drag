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

  export class Container extends React.Component {
    render() {
      const style = {
        width: '100vw',
        height: '100vh'
      }
      return (
        <div style={style}>
          <Map google={this.props.google}
            />
        </div>
      )
    }
  }