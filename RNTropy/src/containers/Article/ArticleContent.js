import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";

const image = require("../../asset/Images/article.png");
const imageHeading = require("../../asset/Images/articleText.png");
const imageTwo = require("../../asset/Images/article2.png");


type Props = {
	navigation: any,
};

export default class ArticleContent extends PureComponent<Props> {
	renderHeading = heading => {
		return <Text style={styles.imageHeading}>{heading}</Text>
    };

    renderImage = image => {
		return <Image source={image} style={StyleSheet.flatten([styles.imageOne])} />
	};
	
	renderTitle = title => {
		return  <Text style={styles.titleText}>{title}</Text>
	};
	
	renderDate = (author,date) => {
        return  <Text style={styles.dateText}>{author}<Text><Text style={styles.dot}> . </Text> {date}</Text></Text>
	}

	renderParagraph = paragraphArray =>{
		return paragraphArray.map((eachPara) => {
            return (
               <Text style = {styles.paragraphText}>{eachPara}</Text>
            );
        });
	}

	renderShortDescription = description => {
        return  <Text style={styles.dateText}>{description}</Text>
	}

	render() {
		return (
			<View style={styles.container}>
			  {this.renderHeading('Architectural digest')}
			  {this.renderImage(image)}
			  {this.renderTitle('Fashion Designer Alexis Mabille’s Paris Villa')}
			  {this.renderDate('By Odovacar Golzar', 'Jan 16,  2018,  3:44 PM')}
			  <Text style = {styles.lineSeperator}></Text>
			  {this.renderParagraph(['I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.', 'Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.'])}
			
			  {this.renderImage(imageTwo)}
			  {this.renderShortDescription('Extending the genre of self-portraiture, Niemi is a visual storyteller. Her images are presented as a cinematic exploration of identity, gender roles and our relationship with ourselves. Photographed in meticulously crafted sets, Niemi’s face is often obscured from view.')}
			  <Text style = {styles.lineSeperator}></Text>
			  {this.renderParagraph([' I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.' , 'Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.' ])}
			  <Text style = {styles.lineSeperator}></Text>
			  <Text style = {styles.openionText}>Add your openion</Text>
			  <Text style = {styles.lineSeperator}></Text>
			</View>
		);
    }
    
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	imageOne:{
		width: ScalePerctFullHeight(100),
		// height: ScalePerctFullHeight(50),
	},
	titleText:{
		color: Colors.textHeading,
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		padding: Metrics.DEFAULT_PADDING
	},
	imageHeading: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		letterSpacing: 0.3,
		fontWeight: 'bold',
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf:'stretch'
	},
	dateText:{
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf:'stretch',
		flexWrap: 'wrap', 
        alignItems: 'flex-start',
		flexDirection:'row',
		justifyContent:'space-between',
		lineHeight: Metrics.LARGE_LINE_HEIGHT
	},
	lineSeperator:{
		width: "100%",
		height: 1,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
        borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		marginBottom: 10,
		marginTop: 0,
   },
	paragraphText: {
		fontSize: Metrics.EXTRA_MEDIUM_TEXT_SIZE,
		letterSpacing: 0.3,
		color: Colors.textHeading,
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "justify",
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT
	},
	dot: {
		padding: Metrics.DEFAULT_PADDING - 10,
		fontSize: 30
	},
	openionText: {
		padding:Metrics.DEFAULT_PADDING - 10,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		lineHeight: 18,
		fontWeight: 'bold',
	}

});
