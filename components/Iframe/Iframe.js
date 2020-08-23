import { WebView } from 'react-native-webview';
 
class MyInlineWeb extends Component {
     
  render() {
    return (
        <Text>Iframe</Text>
     /* <WebView
        originWhitelist={['*']}
        source={{ html: "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1491.834706404438!2d92.5655708056215!3d24.684953396033137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e258ee0c114b1%3A0xe1fed59433e5362d!2sMazarbhiuiya%20Rd%2C%20Model%20Township%2C%20Gangpar%20Dhumkar%2C%20Hailakandi%2C%20Assam%20788155!5e1!3m2!1sen!2sin!4v1592637898564!5m2!1sen!2sin" width="100%" height="500" frameBorder="0" allowFullScreen></iframe>" 
    }}
    />
    );*/)
}
}