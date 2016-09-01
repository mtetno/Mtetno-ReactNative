import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const styles = StyleSheet.create({

    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
    mainText: {
        flex: 2,
        fontSize: 16,
        textAlign: 'center',
        color: '#000000',
    }

});


export default class Forecast extends Component {

    render() {
        return (
          <View>
       <Text style={styles.bigText}>
{this.props.main}
      </Text>

      <Text style={styles.mainText}>
Current Condition : {this.props.description}
     </Text>

     <Text style={styles.bigText}>
{this.props.temp}°F
    </Text>

          </View>

        );

    }

}
