const React = require('react');

const  {
    View,
    Text,
    DrawerLayoutAndroid,
    StatusBar,
    WebView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ProgressBarAndroid
} = require('react-native');

const ScrollableTabView = require('react-native-scrollable-tab-view');

const LeftMenuApi = require('./../LeftMenuAndroid/LeftMenuApi');
const LeftMenu = require('./../LeftMenuAndroid/LeftMenu');
const BarcampColors = require('./../common/BarcampColors');
const BarcampHeader = require('./../common/BarcampHeader');

const Schedule = require('./../Schedule/Schedule');
const Photos = require('./../Photos/Photos');
const Credits = require('./../Credits/Credits');


// TODO [LN] var customData = require('./customData.json');

const DATA = {
    SouthSide : {
        id: 'SouthSide',
        year: '2016',
        title: 'South Side of Life',
        coverPhoto: require('./img/ponte_Fotor.jpg'),
        backgroundColor: BarcampColors.backgroundDarkColor1
    },
    Freedom : { 
        id: 'Freedom',
        year: '2015',
        title: 'Freedom',
        coverPhoto: require('./img/25.png'),
        backgroundColor: BarcampColors.backgroundDarkColor2,
        schedules: [
            {
              title: 'Resumo Barcamp - 2013',
              desc: 'O Opensoft Barcamp aconteceu no dia 25 de Abril. Durante a tarde deste dia juntámos cerca de 40 pessoas num evento de partilha de ideias e de inspiração.',
              videoId: '128780049'
            },
            {
              title: 'Lies and Stats - 10min',
              desc: 'Lies, damned lies, and statistics\nExistem mentiras, existem mentiras odiosas e existem estatísticas...',
              videoId: '130081631'
            },
            {
              title: '10 minutes of Hapiness - 10 min',
              desc: 'Quando a Walmart decidiu criar uma framework para node.js... nasceu hapi.js!!!',
              videoId: '130989956'
            },
        ],
        photos: {
            facebookAlbumId: 758082504289070
        }
    },
    Memories : {
        id: 'Memories',
        year: '2013',
        title: 'Collective memories',
        coverPhoto: require('./img/cakes2_Fotor.jpg'),
        backgroundColor: BarcampColors.backgroundDarkColor3,
        schedules: [
            {
              title: 'Resumo Barcamp - 2015',
              desc: '2013 trouxe consigo a 5ª edição do Barcamp Opensoft. Este ano o tema foi a Memória Colectiva e os participantes trouxeram-nos apresentações que certamente irão perdurar na memória de todos.',
              videoId: '78178801'
            },
            {
              title: 'O Bigode do Mão de Ferro - 5min',
              desc: 'Notas históricas sobre o bigode, como evoluiu através dos tempos? Qual o seu significado?',
              videoId: '76961433'
            },
            {
              title: 'Alho porque não - 10 min',
              desc: 'Existem grandes defensores do consumo de alho, nesta apresentação ficamos a conhecer algumas das vantagens do seu consumo, mas também algumas advertências a ter em conta.',
              videoId: '76882550'
            },
        ],
        photos: {
            facebookAlbumId: 479642382133085
        }
    }
};

var BarcampMain = React.createClass({
    
    getInitialState(){
        return { selectedBarcamp: DATA['Freedom'] };
    },

    onMenuItemPress(menuIdPressed) {
        this.setState( { selectedBarcamp: DATA[menuIdPressed] });
        LeftMenuApi.closeDrawer();
    },

    render() {
                  
        const handleDrawerInit = (drawer) => {
            LeftMenuApi.init(drawer)
        };  
        
        const navigationView = (
            <LeftMenu 
                style={styles.container}
                selectedBarcamp={this.state.selectedBarcamp}
                onMenuItemPress={this.onMenuItemPress} />
        );
         
        const getBarcampFullTitle = () => {
            return `${this.state.selectedBarcamp.year} - ${this.state.selectedBarcamp.title}`;
        };
            
        return(   
            <View style={styles.container}> 
                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                />
                <DrawerLayoutAndroid   
                    ref={(drawer) => handleDrawerInit(drawer)}
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                        <BarcampHeader 
                            title={getBarcampFullTitle()}
                            backgroundColor={this.state.selectedBarcamp.backgroundColor} />
                        <View style={{flex: 1}}>
                            <ScrollableTabView
                                tabBarBackgroundColor = {this.state.selectedBarcamp.backgroundColor}
                                tabBarUnderlineColor = {BarcampColors.backgroundLighColor}
                                tabBarActiveTextColor = {BarcampColors.tabsTextActive}
                                tabBarInactiveTextColor = {BarcampColors.tabsTextpassive}>
                                
                                <Schedule
                                    schedules={this.state.selectedBarcamp.schedules}
                                    navigator={this.props.navigator}
                                    tabLabel='Schedule' />
                                
                                <Photos 
                                    photos={this.state.selectedBarcamp.photos}
                                    navigator={this.props.navigator}  
                                    tabLabel='Photos' />
                                    
                                <Credits
                                    navigator={this.props.navigator}  
                                    tabLabel='Credits'/>
                            
                            </ScrollableTabView>
                        </View>  
                </DrawerLayoutAndroid>
            </View> 
        )
    },  
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}); 

module.exports = BarcampMain;