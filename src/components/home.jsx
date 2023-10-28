import { Flex, Box, Button } from 'monday-ui-react-core';
import React, { useRef } from "react";
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';

export const Home = (props) => {
    console.log("props.header", props.header)
    const HomeBlock = (props) => {
        return (
            <Box className={'ni-layout-home-block'}  >
                <WebContent info={props.detail}  contentClassName={props.contentClassName} alterClassHint={props.alterClassHint}/>
            </Box>
        );
    }
    
    const viewRef = {
        menu: useRef(),
        footer: useRef(),
        products: useRef()
    };

    const scrollCallBack = (view) => {
        viewRef[view]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const HomeIntro = (props) => {
/*        let intros = props.content?.intro.component?.elements
        console.log("intros: ", intros)
        console.log ("intros: ", Object.keys(intros))
        Object.keys(intros).map((key) => {
            if (intros[key].render !== 'Asset'){
                console.log("intros_right: ", intros[key].render)
            }else {
                console.log("intros_left: ", intros[key].render)
            }
        })  */
        console.log("props.content?.intro_left.component?.elements: ", props.content?.intro_left.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-intro'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <HomeBlock detail={props.content?.intro_left.component?.elements} contentClassName={'ni-layout-home-intro-title-text'}/>
                <HomeBlock detail={props.content?.intro_right.component?.elements} />
            </Flex>
        );
    };

    const HomeApproach_title = (props) => {
        console.log("props.content?.approach_title.component?.elements: ", props.content?.approach_title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <HomeBlock detail={props.content?.approach_title.component?.elements} contentClassName={'ni-layout-home-approach-title-text'}/>
            </Flex>
        );
    };

    const HomeApproach_cards = (props) => {
        console.log("props.content?.approach_cards.component?.elements: ", props.content?.approach_cards.component?.elements)
        return (
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                // className={'ni-layout-home-approach'} 
                className={'ni-layout-card-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <WebContent info={props.content?.approach_cards.component?.elements} alterClassHint={'card'}/>
                {/* <HomeBlock detail={props.content?.approach_cards.component?.elements} alterClassHint={'card'}/>     */}
            </Flex>
        );
    };

    const HomeProducts = (props) => {
        console.log("props.content?.products_title.component?.elements: ", props.content?.products_title.component?.elements)
        return (
            <Flex
                id={'myproducts'}            
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-products'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <HomeBlock detail={props.content?.products_title.component?.elements} contentClassName={'ni-layout-home-products-title'}/>
                <WebContent info={props.content?.products.component?.elements} alterClassHint={'card'}/>
            </Flex>
        );
    };

    // const HomeProducts = (props) => {
    //     console.log("props.content?.products.component?.elements: ", props.content?.products.component?.elements)
    //     return (
    //         <Flex
    //             justify={Flex.justify.CENTER} 
    //             align={Flex.justify.CENTER} 
    //             className={'ni-layout-card-products'} 
    //             direction={Flex.directions.ROW}
    //             gap={Flex.gaps.SMALL} >
    //             {/* <WebContent info={props.content?.products.component?.elements} alterClassHint={'card'}/> */}
    //         </Flex>
    //     );
    // };

    return (
        //(props.home === undefined) ? 
            //<Messenger message={'loader'} /> :
            //console.log("prop.header", props.header)
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.NONE} >
                <HeaderMenu refProps={viewRef.menu} scrollCallBack={scrollCallBack} content={props.header} />
                <HomeIntro content={props.home} />
                <HomeApproach_title content={props.home} />
                <HomeApproach_cards content={props.home} />
                <HomeProducts refProps={viewRef.products} scrollCallBack={scrollCallBack} content={props.home} />
                <FooterMenu refProps={viewRef.footer} scrollCallBack={scrollCallBack} content={props.footer} />

            </Flex>
    );
}

export default Home;